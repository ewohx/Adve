import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { locationsListData } from '../../../../store/locationList/locationListReducers';
import { getLocationsListInfoAsync } from '../../../../store/locationList/thunks/getLocationsListThunk';
import './LocationListMobile.css';

export const LocationsListMobile = () => {
	// appSelectors
	const locations = useAppSelector(locationsListData);
	const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(getLocationsListInfoAsync());
		})();
	}, []);

	return (
		<>
			<div className='locations-list-mobile'>
				<div className='locations-list-title-mobile'>Локации</div>
				{locations.map((location, index) => (
					<div key={index} className='locations-list-tab-mobile'>
						<img
							className='locations-list-tab-image-mobile'
							src={location.image}
							alt={location.title}
						/>
						<div className='locations-list-tab-content-mobile'>
							<a
								className='locations-list-tab-title-mobile'
								href={location.link}
							>
								{location.title}
							</a>
							<div className='locations-list-tab-content-activities-container-mobile'>
								{location.activities.map((activity, index) => (
									<div
										className='locations-list-tab-content-activities-mobile'
										key={index}
									>
										{activity}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
