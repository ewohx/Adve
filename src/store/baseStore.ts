import { configureStore, ThunkAction, Action, Middleware } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import locationReducer from './location/locationReducers'
import locationsListReducer from './locationList/locationListReducers'

export const store = configureStore({
    reducer: {
        location: locationReducer,
        locationsList: locationsListReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(reduxLogger as Middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
