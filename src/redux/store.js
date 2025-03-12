import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import homeReducer from "./slices/homeSlice";
import menuReducer from "./slices/menuSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        home: homeReducer,
        menu: menuReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                warnAfter: 100, // Increase the threshold to 100ms
            },
        }),
})

export default store;