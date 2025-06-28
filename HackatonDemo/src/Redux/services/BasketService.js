import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './Userservice';

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Basket'],
  endpoints: (builder) => ({
    getBasket: builder.query({
      query: () => '/Basket',
      providesTags: ['Basket'],
    }),
    addToBasket: builder.mutation({
      query: (product) => ({
        url: '/Basket',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Basket'],
    }),
    removeFromBasket: builder.mutation({
      query: (id) => ({
        url: `/Basket/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Basket'],
    }),
    clearBasket: builder.mutation({
      query: () => ({
        url: '/Basket/clear',
        method: 'DELETE',
      }),
      invalidatesTags: ['Basket'],
    }),
  }),
});

export const {
  useGetBasketQuery,
  useAddToBasketMutation,
  useRemoveFromBasketMutation,
  useClearBasketMutation,
} = basketApi;
