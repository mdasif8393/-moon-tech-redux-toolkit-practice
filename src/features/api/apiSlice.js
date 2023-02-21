import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productAPi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products",
            }),
            providesTags: ["Products"],
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: "/product",
                method: "POST",
                body: product,
            })
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["Products"], 
        })
    }),
});

export const {useGetProductsQuery, useAddProductMutation, useRemoveProductMutation} = productApi;