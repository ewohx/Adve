import { useEffect, useRef, useState } from "react";
import { LocationGeographyItemMobile, LocationGeographyItemMobileDefaultWidth, LocationGeographyItemMobileMargin } from "./locationGeographyItem/LocationGeographyItemMobile";
import { ReactComponent as RegionIcon } from '../../../../common/icons/locationGeography/map.svg';
import { ReactComponent as CoordinatesIcon } from '../../../../common/icons/locationGeography/map-pin.svg';
import './LocationGeographyMobile.css';

export interface LocationGeographyMobileProps {
    region: string;
    coordinates: string;
}

export const LocationGeographyMobile = (props: LocationGeographyMobileProps) => {
    const locationGeographyItemMobileCount: number = 2;

    const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(locationGeographyItemMobileCount - 1);

    const maxExpandedItemWidth = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        checkWidth();

        window.addEventListener('resize', checkWidth);

		return () => {
			window.removeEventListener('resize', checkWidth);
		};
    }, []);

    const checkWidth = () => {
        if (containerRef.current === null) return;

        const containerWidth = containerRef.current.clientWidth;
        if (containerWidth <= maxExpandedItemWidth.current) {
            setExpandedItemIndex(null);
            return;
        }

        setExpandedItemIndex(prevIndex => {
            if (prevIndex !== null) {
                return prevIndex;
            }
            return locationGeographyItemMobileCount - 1;
        });
    }

    const setExpandedIndex = (index: number | null) => {
        setExpandedItemIndex(prevIndex => {
            if (prevIndex !== index) {
                return index;
            }
            return -1;
        });
    }

    const setMaxExpandedWidth = (width: number) => {
        let iconsAndMarginsWidths = (locationGeographyItemMobileCount - 1) * (LocationGeographyItemMobileDefaultWidth + LocationGeographyItemMobileMargin);
        let maxExpandedItemAndMarginsWidth = width + LocationGeographyItemMobileMargin;

        if (maxExpandedItemWidth.current < iconsAndMarginsWidths + maxExpandedItemAndMarginsWidth) {
            maxExpandedItemWidth.current = iconsAndMarginsWidths + maxExpandedItemAndMarginsWidth;
        }
    }

    return (
        <div
            className="location-geography-items-mobile"
            ref={containerRef}
        >
            <LocationGeographyItemMobile
                icon={<RegionIcon />}
                title={props.region}
                hrefUrl={`#/${props.region}`}
                index={0}
                isExpanded={expandedItemIndex === 0}
                isOverflowed={expandedItemIndex === null}
                setExpandedIndex={setExpandedIndex}
                setMaxExpandedWidth={setMaxExpandedWidth}
            />
            <LocationGeographyItemMobile
                icon={<CoordinatesIcon />}
                title={props.coordinates}
                hrefUrl={`#/${props.coordinates}`}
                index={1}
                isExpanded={expandedItemIndex === 1}
                isOverflowed={expandedItemIndex === null}
                setExpandedIndex={setExpandedIndex}
                setMaxExpandedWidth={setMaxExpandedWidth}
            />
        </div>
    );
}