import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { locationData } from "../../../../store/location/locationReducers";
import { getLocationInfoAsync } from "../../../../store/location/thunks/getLocationInfoThunk";
import { LocationGeographyMobile } from "./locationGeography/LocationGeographyMobile";
import { LocationTabsMobile } from "./locationTabs/LocationTabsMobile";
import './LocationMobile.css';
import './LocationTabContentMobile.css';
import { LocationTagsMobile } from "./locationTags/LocationTagsMobile";

export interface LocationMobileProps {
    
}

export const LocationMobile = (props: LocationMobileProps) => {
    // url params
    const {locationUrl} = useParams();

    // appSelectors
    const location = useAppSelector(locationData);
    const dispatch = useAppDispatch();

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        (async () => {
            if (locationUrl === undefined) {
                return;
            }

            await dispatch(getLocationInfoAsync(locationUrl))
        })();
    }, []);
    

	document.title = `Adve - ${location.title}`;
	return (
        <>
            <div className='header-location-mobile' style={{backgroundImage: `url(${location.titlePhotoUrl})`}}>
                <h1>{`${location.title} (${locationUrl})`}</h1>
                <LocationGeographyMobile
                    region={"Дальний восток, Россия"}
                    coordinates={"551.648704, 160.266999"}
                />
                <LocationTabsMobile
                    tabs={location.tabs}
                    activeIndex={activeIndex}
                    setActiveTab={setActiveIndex}
                />
            </div>
            <div 
                className='content-location-mobile'
                dangerouslySetInnerHTML={ activeIndex < location.tabs.length
                    ? { __html: location.tabs[activeIndex].htmlContent }
                    : { __html: "" }
                }
            ></div>
            <div className='footer-location-mobile'>
                <LocationTagsMobile tags={location.tags} />
                {/* <div className='viewscount-location-mobile'>
                    <a href='#' onClick={() => alert('врвр3')}>
                        <ShareIcon className='icon-share-mobile' />
                    </a>
                    <EyeIcon className='icon-eye-mobile' />
                    {landmarkInfo.views}
                </div> */}
            </div>
        </>
	);
}