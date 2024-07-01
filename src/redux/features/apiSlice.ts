import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:4040',
     }),
     endpoints: (builder) => ({
        getTodos : builder.query({
            query : () => ({
                url : '/tasks',
                method : 'GET',
                
            })
        })
     }),
})  
export const {useGetTodosQuery} = apiSlice;
