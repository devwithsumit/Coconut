import { createSlice } from "@reduxjs/toolkit";
import { loadMenuByResId } from "../actions/restaurantActions";

const initialState = {
    restaurantInfo: null,
    categories: [],
    loading: false,
    error: null,
}
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadMenuByResId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadMenuByResId.fulfilled, (state, action) => {
                state.restaurantInfo = action.payload.resData;
                state.categories = action.payload.filteredCategories;
                state.loading = false;
            })
            .addCase(loadMenuByResId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default menuSlice.reducer;