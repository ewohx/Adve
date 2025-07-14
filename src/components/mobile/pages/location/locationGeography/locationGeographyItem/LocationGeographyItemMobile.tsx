import React, { useEffect, useRef, useState } from 'react';
import './LocationGeographyItemMobile.css';

export interface LocationGeographyItemMobileProps {
    icon: React.ReactNode;
    title: string;
    hrefUrl: string;

    index: number;
    isExpanded: boolean;
    isOverflowed: boolean;

    setExpandedIndex: (index: number) => void;
    setMaxExpandedWidth: (width: number) => void;
}

export const LocationGeographyItemMobileMargin: number = 16; // Размер отступа
export const LocationGeographyItemMobileDefaultWidth: number = LocationGeographyItemMobileMargin * 2; // Размер иконки

export const LocationGeographyItemMobile = (props: LocationGeographyItemMobileProps) => {
    
    const titleRef = useRef<HTMLAnchorElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const [currentWidth, setCurrentWidth] = useState<number>(LocationGeographyItemMobileDefaultWidth);

    useEffect(() => {
        props.setMaxExpandedWidth(getExpandedWidth());
    }, []);

    useEffect(() => {
        setCurrentWidth(getWidth());
    }, [props.isExpanded]);

    const getWidth = () => {
        if (!props.isExpanded) return LocationGeographyItemMobileDefaultWidth;
        
        return getExpandedWidth();
    }

    const getExpandedWidth = () => {
        if (titleRef.current === null) return LocationGeographyItemMobileDefaultWidth;

        return titleRef.current.scrollWidth + LocationGeographyItemMobileDefaultWidth + LocationGeographyItemMobileMargin;
    }

    const handleOnClick = () => {
        alert(`open ${props.hrefUrl}`);
    }

    return (
        <div
            className={`location-geography-item-mobile`}
            ref={containerRef}
            style={{
                width: `${currentWidth}px`,
                marginRight: `${LocationGeographyItemMobileMargin}px`,
                minWidth: `${LocationGeographyItemMobileDefaultWidth}px`
            }}
        >
            {React.cloneElement(props.icon as React.ReactElement, {
                className: `location-geography-item-icon-mobile`,
                style: {
                    marginRight: LocationGeographyItemMobileMargin,
                    minWidth: `${LocationGeographyItemMobileDefaultWidth}px`,
                    minHeight: `${LocationGeographyItemMobileDefaultWidth}px`
                },
                onClick: props.isOverflowed
                    ? handleOnClick
                    : () => props.setExpandedIndex(props.index),
            })}
            <a
                href='#'
                onClick={handleOnClick}
                ref={titleRef}
                className={`location-geography-item-title-mobile`}
            >
                {props.title}
            </a>
        </div>
    );
}