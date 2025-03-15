import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const resApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2/"
    }),
    tagTypes: [],
    endpoints: (build) => ({
        getResById: build.query({
            query: (id) => `${id}`,
        })
    }),
})

export const { useGetResByIdQuery } = resApi;