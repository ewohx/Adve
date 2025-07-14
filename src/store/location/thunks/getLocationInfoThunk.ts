import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { GetLocationInfoAsync } from '../../../httpClients/location/locationHttpClient';
import { ILocationState } from '../ILocationState';

export const getLocationInfoAsync = createAsyncThunk(
	'location/get',
	async (locationUrl: string) => {
		const response = await GetLocationInfoAsync(locationUrl);
		return response.data;
	}
);

export const casesForLocationInfoAsync = (
	builder: ActionReducerMapBuilder<ILocationState>
) => {
	builder
		.addCase(getLocationInfoAsync.fulfilled, (state, action) => {
			state.getLocationStatus = 'idle';
			if (action.payload === null) {
				return;
			}

			state.data.title = action.payload.title;
			state.data.titlePhotoUrl = action.payload.titlePhotoUrl;
			state.data.tabs = action.payload.tabs;
			state.data.tags = action.payload.tags;
			state.data.viewsCount = action.payload.viewsCount;
		})
		.addCase(getLocationInfoAsync.pending, state => {
			state.getLocationStatus = 'loading';
		})
		.addCase(getLocationInfoAsync.rejected, state => {
			state.getLocationStatus = 'failed';
		});
};
