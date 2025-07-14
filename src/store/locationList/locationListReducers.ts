import { createSlice } from "@reduxjs/toolkit";
import { ILocationsListState } from "./ILocationsListState";
import { casesForLocationInfoAsync } from "./thunks/getLocationsListThunk";
import { RootState } from "../baseStore";

const initialState: ILocationsListState = {
    data: [],

    getLocationsListStatus: 'idle'
}

const locationsListSlice = createSlice({
    name: 'locationsList',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        casesForLocationInfoAsync(builder);
    }
});

export const locationsListData = (state: RootState) => state.locationsList.data;

export default locationsListSlice.reducer;