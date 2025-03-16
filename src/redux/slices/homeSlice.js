import { createSlice } from "@reduxjs/toolkit";
import { loadData } from "../actions/restaurantActions";

const initialState = {
    data: null,
    loading: false,
    error: null,
}
const homeSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadData.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loadData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export default homeSlice.reducer;