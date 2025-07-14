import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { GetLocationsListAsync } from "../../../httpClients/locationsList/locationsListHttpClient";
import { ILocationsListState } from "../ILocationsListState";

export const getLocationsListInfoAsync = createAsyncThunk(
    'locationsList/get',
    async () => {
        const response = await GetLocationsListAsync();
        return response.data;
    }
);

export const casesForLocationInfoAsync = (builder: ActionReducerMapBuilder<ILocationsListState>) => {
    builder
        .addCase(getLocationsListInfoAsync.fulfilled, (state, action) => {
            state.getLocationsListStatus = 'idle';
            state.data = action.payload;
        })    
        .addCase(getLocationsListInfoAsync.pending, (state) => {
            state.getLocationsListStatus = 'loading';
        })
        .addCase(getLocationsListInfoAsync.rejected, (state) => {
            state.getLocationsListStatus = 'failed';
        });
}