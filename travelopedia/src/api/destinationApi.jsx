import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const destinationApi = createApi({
  reducerPath: 'apiDestination',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Destinations'],
  endpoints: (builder) => ({
    getAllDes: builder.query({
      query: () => 'destination',
      providesTags: ['Destinations'],
    }),
    addNewDes: builder.mutation({
      query: (destination) => ({
        url: 'destination',
        method: 'POST',
        body: destination,
      }),
      invalidatesTags: ['Destinations'],
    }),
    deleteDes: builder.mutation({
      query: (id) => ({
        url: `destination/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Destinations'],
    }),
    updateDes: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: 'PUT',
        body: destination,
      }),
      invalidatesTags: ['Destinations'],
    }),
  }),
});

export const {
  useGetAllDesQuery,
  useAddNewDesMutation,
  useDeleteDesMutation,
  useUpdateDesMutation,
} = destinationApi;
