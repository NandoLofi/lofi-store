import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({baseUrl:"ttps://lofi-store.herokuapp.com/"}),
    endpoints: (builder)=> ({
        getAllProducts: builder.query({
            query: ()=> "products",
        })
    })
})

export const { useGetAllProductsQuery } = productsAPI
