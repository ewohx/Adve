import { FooterItemsList, HeaderItemsList } from "../../../common/menu/menuConfig";
import { MenuListMobile } from "./menuList/MenuListMobile";
import './MenuMobile.css';
import './MenuBlackoutMobile.css';
import { useEffect, useRef, useState } from "react";

export interface MenuMobileProps {
	isOpen: boolean;
	onClose: () => void;
}

export const MenuMobile = (props: MenuMobileProps) => {
	const menuWidth = 224; // px
	const blackoutMaxTransparence = 75;

	const menuRef = useRef<HTMLDivElement>(null);

	const [menuPosition, setMenuPosition] = useState<number>(-menuWidth);
	const [blackoutCurrentTransparence, setBlackoutCurrentTransparence] = useState<number>(0);

	const [isDruggingMenu, setIsDruggingMenu] = useState<boolean>(false);
	const startMenuDraggingX = useRef(0);

	useEffect(() => {
		if (props.isOpen) {
			setMenuPosition(0);
			setBlackoutCurrentTransparence(blackoutMaxTransparence);
		}
		else {
			setMenuPosition(-menuWidth);
			setBlackoutCurrentTransparence(0);
		}
	}, [props.isOpen]);

	useEffect(() => {
		if (menuPosition === -menuWidth && props.isOpen) {
			props.onClose();
		}
	}, [menuPosition]);

	useEffect(() => {
		menuRef.current?.addEventListener('mousedown', handleOnMouseDownOnMenu);
		menuRef.current?.addEventListener('touchstart', handleOnTouchStartOnMenu, { passive: true });

		return () => {
			menuRef.current?.removeEventListener('mousedown', handleOnMouseDownOnMenu);
			menuRef.current?.removeEventListener('touchstart', handleOnTouchStartOnMenu);
		};
	}, []);

	const startMenuSwipe = (xCoordinate: number) => {
		setIsDruggingMenu(true);
		startMenuDraggingX.current = xCoordinate;
	}

	const durationMenuSwipe = (xCoordinate: number) => {
		const cursorDelta = xCoordinate - startMenuDraggingX.current;
		const newPosition = Math.min(0, Math.max(-menuWidth, cursorDelta));
		const newTransparence = Math.round(blackoutMaxTransparence - (newPosition * blackoutMaxTransparence / -menuWidth));

    	setMenuPosition(newPosition);
		setBlackoutCurrentTransparence(newTransparence);
	}

	const endMenuSwipe = () => {
		setMenuPosition(currentPos => {
			if (currentPos > -menuWidth / 2) {
				return 0;
			}

			return -menuWidth;
		});
		setBlackoutCurrentTransparence(currentTrans => {
			if (currentTrans < blackoutMaxTransparence / 2) {
				return 0;
			}

			return blackoutMaxTransparence;
		});

		setIsDruggingMenu(false);
		startMenuDraggingX.current = 0;
	}

	const handleOnTouchStartOnMenu = (event: TouchEvent) => {
		startMenuSwipe(event.touches[0].clientX);

		window.addEventListener('touchmove', handleOnTouchMove);
      	window.addEventListener('touchend', handleOnTouchEnd);
	}

	const handleOnTouchMove = (event: TouchEvent) => {
		durationMenuSwipe(event.touches[0].clientX);
	}

	const handleOnTouchEnd = (event: TouchEvent) => {
		endMenuSwipe();

		window.removeEventListener('touchmove', handleOnTouchMove);
      	window.removeEventListener('touchend', handleOnTouchEnd);
	}

	const handleOnMouseDownOnMenu = (event: MouseEvent) => {
		startMenuSwipe(event.x);

		window.addEventListener('mousemove', handleOnMouseMove);
      	window.addEventListener('mouseup', handleOnMouseUp);
	}

	const handleOnMouseMove = (event: MouseEvent) => {
		durationMenuSwipe(event.x);
	}

	const handleOnMouseUp = (event: MouseEvent) => {
		endMenuSwipe();

		window.removeEventListener('mousemove', handleOnMouseMove);
      	window.removeEventListener('mouseup', handleOnMouseUp);
	}

    return (
		<>
			<div
				className={`menu-blackout-mobile`}
				onClick={props.onClose}
				style={{
					backgroundColor: `rgba(var(--blackout), 0.${blackoutCurrentTransparence > 9 ? blackoutCurrentTransparence.toString() : '0' + blackoutCurrentTransparence.toString()})`,
					display: blackoutCurrentTransparence > 0 ? 'block' : 'none'
				}}
			></div>
			<div
				className={`menu-mobile${isDruggingMenu ? ' moving' : ''}`}
				ref={menuRef}
				style={{
					transform: `translateX(${menuPosition}px)`,
					width: `${menuWidth}px`
				}}
			>
				<div className='header'>
					<MenuListMobile list={HeaderItemsList} />
				</div>
				<div className='line'></div>
				<div className='footer'>
					<MenuListMobile list={FooterItemsList} />
				</div>
			</div>
		</>
    );
}