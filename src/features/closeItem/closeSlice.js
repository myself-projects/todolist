import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: '',
}

export const closeSlice = createSlice({
    name: 'closeItem',
    initialState,
    reducers: {
        getCloseItem: (state, action) => {
            state.item = action.payload;
        }
    }
});

export const { getCloseItem } = closeSlice.actions;
export default closeSlice.reducer;