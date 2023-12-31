import { configureStore } from "@reduxjs/toolkit";
import closeItemReducer from '../src/features/closeItem/closeSlice';

export const store = configureStore({
    reducer: {
        closeItem: closeItemReducer,
    }
});