import { createSlice } from "@reduxjs/toolkit";
import { ILocationState } from "./ILocationState";
import { RootState } from "../baseStore";
import { casesForLocationInfoAsync } from "./thunks/getLocationInfoThunk";

const initialState: ILocationState = {
    data: {
        title: "",
        titlePhotoUrl: "",
        tabs: [],
        tags: [],
        viewsCount: 0,
    },

    getLocationStatus: "idle"
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        casesForLocationInfoAsync(builder);
    }
});

export const locationData = (state: RootState) => state.location.data;

export default locationSlice.reducer;
