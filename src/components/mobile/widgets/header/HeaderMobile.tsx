import { ReactComponent as OpenMobileMenuIcon } from '../../common/icons/open_mobile_menu_button.svg';
import { ReactComponent as AdveIcon } from '../../../common/icons/adve.svg';
import { ReactComponent as SearchIcon } from '../../../common/icons/search.svg';
import './HeaderMobile.css';
import { useEffect, useRef, useState } from 'react';

export interface HeaderMobileProps {
	onMenuOpen: () => void;
}

export const HeaderMobile = (props: HeaderMobileProps) => {
	const speedScrollInPixelsPerTime = 2;
	const minHeightFromTopInPixels = 96;

	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
	
		let diff = Math.abs(currentScrollY - lastScrollY.current);
		if (currentScrollY > lastScrollY.current && diff > speedScrollInPixelsPerTime && currentScrollY > minHeightFromTopInPixels) {
			setIsVisible(false);
		} else if ((currentScrollY < lastScrollY.current && diff > speedScrollInPixelsPerTime) || currentScrollY < minHeightFromTopInPixels) {
			setIsVisible(true);
		}

		lastScrollY.current = currentScrollY;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);
	
	return (
		<div
			className={`header-mobile${!isVisible ? ' hided' : ''}`}
			style={{
				transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
			}}
		>
			<OpenMobileMenuIcon className='header-menu-button-mobile' onClick={props.onMenuOpen} />
			<a href='/'>
				<AdveIcon className='header-logo-mobile'/>
			</a>
			<SearchIcon className='header-search-button-mobile' onClick={() => alert('SEARCH OPEN!!!')} />
		</div>
	);
};