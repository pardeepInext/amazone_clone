import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';

export default configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: {
        main: mainSlice
    }
});