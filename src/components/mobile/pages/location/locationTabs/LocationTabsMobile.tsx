import { useEffect, useRef, useState } from 'react';
import './LocationTabsMobile.css';

export interface ITabTitles {
    index: number;
    title: string;
}

export interface LocationTabsMobileProps {
    tabs: Array<ITabTitles>;
    activeIndex: number;

    setActiveTab: (index: number) => void;
}

export const LocationTabsMobile = (props: LocationTabsMobileProps) => {
    // refs
    const titlesRef = useRef<HTMLDivElement>(null);
    const tabsButtonsRef = useRef<HTMLDivElement>(null);
    const startTabTitlesDraggingX = useRef<number>(0);
    const activeButtonRef = useRef<HTMLButtonElement>(null);

    // states
    const [tabTitlesPosition, setTabTitlesPosition] = useState<number>(0);
    const [isDruggingTabTitles, setIsDruggingTabTitles] = useState<boolean>(false);
    const [velocityAfterDrug, setVelocityAfterDrug] = useState(0);
    const [underscoreMarginLeft, setUnderscoreMarginLeft] = useState<number>(0);
    const [underscoreWidth, setUnderscoreWidth] = useState<number>(0);

    useEffect(() => {
        updateUnderscore(); 
    }, [props.activeIndex, props.tabs]);

    useEffect(() => {
        if (isDruggingTabTitles === false && velocityAfterDrug !== 0) {
            setNewTabTitlesPosition(velocityAfterDrug * Math.abs(velocityAfterDrug) * 2);
            setVelocityAfterDrug(0);
        }
    }, [isDruggingTabTitles, velocityAfterDrug]);

    useEffect(() => {
        window.addEventListener('resize', setDeafultTabTitlesPosition);

        titlesRef.current?.addEventListener('mousedown', handleOnMouseDownOnTabsTitles);
		titlesRef.current?.addEventListener('touchstart', handleOnTouchStartOnTabsTitles, { passive: true });

		return () => {
			window.removeEventListener('resize', setDeafultTabTitlesPosition);

            titlesRef.current?.removeEventListener('mousedown', handleOnMouseDownOnTabsTitles);
			titlesRef.current?.removeEventListener('touchstart', handleOnTouchStartOnTabsTitles);
		};
	}, []);

    const updateUnderscore = () => {
        setUnderscoreMarginLeft(getUnderscoreMarginLeft());
        setUnderscoreWidth(getUnderscoreWidth());
    }

    const getUnderscoreMarginLeft = () => {
        if (activeButtonRef.current !== null && activeButtonRef.current !== undefined) {
            let parentPaddingLeft = tabsButtonsRef.current?.offsetLeft ?? 0;
            return activeButtonRef.current.offsetLeft - parentPaddingLeft;
        }

        return 0;
    }

    const getUnderscoreWidth = () => {
        if (activeButtonRef.current !== null && activeButtonRef.current !== undefined) {
            return activeButtonRef.current.scrollWidth;
        }

        return 0;
    }

    const setDeafultTabTitlesPosition = () => {
        setTabTitlesPosition(0);
    }

    const startTabTitlesSwipe = (xCoordinate: number) => {
        startTabTitlesDraggingX.current = xCoordinate;
        setIsDruggingTabTitles(true);
    }

    const durationTabTitlesSwipe = (xCoordinate: number) => {
        const cursorDelta = xCoordinate - startTabTitlesDraggingX.current;

        startTabTitlesDraggingX.current = xCoordinate;
        setVelocityAfterDrug(cursorDelta);
        setNewTabTitlesPosition(cursorDelta);
    }

    const endTabTitlesSwipe = () => {
		startTabTitlesDraggingX.current = 0;
        setIsDruggingTabTitles(false);
    }

    const setNewTabTitlesPosition = (cursorDelta: number) => {
        let minTransition: number = 0;
        let maxTransition: number = 0;

        if (titlesRef.current !== null && titlesRef.current !== undefined && titlesRef.current.parentElement !== null) {
            let temp = titlesRef.current.scrollWidth + titlesRef.current.offsetLeft * 2;
            if (titlesRef.current.parentElement.clientWidth < temp) {
                maxTransition = titlesRef.current.parentElement.clientWidth - temp;
            }
        }
        
        setTabTitlesPosition(current => {
            const newValue = current + cursorDelta;

            if (newValue > minTransition) return minTransition;
            if (newValue < maxTransition) return maxTransition;

            return newValue;
        });
    }

    const handleOnTouchStartOnTabsTitles = (event: TouchEvent) => {
		startTabTitlesSwipe(event.touches[0].clientX);

		window.addEventListener('touchmove', handleOnTouchMove);
      	window.addEventListener('touchend', handleOnTouchEnd);
	}

	const handleOnTouchMove = (event: TouchEvent) => {
		durationTabTitlesSwipe(event.touches[0].clientX);
	}

	const handleOnTouchEnd = (event: TouchEvent) => {
		endTabTitlesSwipe();

		window.removeEventListener('touchmove', handleOnTouchMove);
      	window.removeEventListener('touchend', handleOnTouchEnd);
	}

	const handleOnMouseDownOnTabsTitles = (event: MouseEvent) => {
		startTabTitlesSwipe(event.x);

		window.addEventListener('mousemove', handleOnMouseMove);
      	window.addEventListener('mouseup', handleOnMouseUp);
	}

	const handleOnMouseMove = (event: MouseEvent) => {
		durationTabTitlesSwipe(event.x);
	}

	const handleOnMouseUp = (event: MouseEvent) => {
		endTabTitlesSwipe();

		window.removeEventListener('mousemove', handleOnMouseMove);
      	window.removeEventListener('mouseup', handleOnMouseUp);
	}


    return (
        <div
            className={`tab-titles-location-mobile${isDruggingTabTitles ? ' moving' : ''}`}
            ref={titlesRef}
            style={{
                transform: `translateX(${tabTitlesPosition}px)`,
            }}
        >
            <div
                className={`tab-titles-buttons-location-mobile`}
                ref={tabsButtonsRef}
            >
                {props.tabs
                    .map((tab) => (
                        <button
                            key={tab.index}
                            onClick={() => props.setActiveTab(tab.index)}
                            className={props.activeIndex === tab.index ? 'active' : ''}
                            ref={props.activeIndex === tab.index ? activeButtonRef : null}
                        >
                            {tab.title}
                        </button>
                    ))
                }
            </div>
            <div 
                className='tab-titles-underscore-location-mobile'
                style={{
                    marginLeft: `${underscoreMarginLeft}px`,
                    width: `${underscoreWidth}px`
                }}
            ></div>
        </div>
    );
}