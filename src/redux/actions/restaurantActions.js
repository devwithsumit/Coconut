import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loadData = createAsyncThunk('home/fetchData', async ({ lat, lng }) => {
    try {
        //This method is safe as it does not change the url structure
        // built-in JavaScript way to manipulate query parameters safely and cleanly
        let mainUrl = import.meta.env.VITE_HOME_API;

        // optional when coordinates are provided to avoid app crash
        if (lat && lng) {
            const url = new URL(mainUrl);

            url.searchParams.set('lat', lat);
            url.searchParams.set('lng', lng);

            // restore new url back to baseUrl or mainUrl
            mainUrl = url.toString();
        }

        const response = await axios.get(mainUrl);

        const AllSections = response?.data?.data?.cards;
        const mainSections = AllSections.filter((section) => (
            section.card.card.hasOwnProperty('gridElements') ||
            'gridElements' in section.card.card
        ))
        return mainSections;
    } catch (error) {
        console.log("Error loading data : ", error.message);
    }
})

export const loadMenuByResId = createAsyncThunk('menu/resId', async ({ resId, lat, lng }) => {
    try {
        let baseUrl = import.meta.env.VITE_RES_INFO_API;
        let url = new URL(baseUrl);
        // optional if coordinates are provided
        if (lat && lng) {
            url.searchParams.set('lat', lat);
            url.searchParams.set('lng', lng);
        }
        //Using in-built js way to manipulate resId   
        url.searchParams.set('restaurantId', resId);
        baseUrl = url.toString();
        
        // fetch data with the final url
        const res = await axios.get(baseUrl);

        const resData = res.data?.data?.cards[2]?.card?.card?.info;

        // desktop || phone (api gives different data in different views)
        const fullMenuList =
            res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
            res.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const filteredCategories = fullMenuList.filter((elem) => (
            elem.card?.card?.hasOwnProperty('itemCards')
        ))
        return { resData, filteredCategories };
    } catch (error) {
        console.log("Error in loading Menu: ", error.message);
    }
})