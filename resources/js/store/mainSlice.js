import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    path: document.querySelector('meta[name="asset"]').content,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {

    }
})



export default mainSlice.reducer;