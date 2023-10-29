import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const destinationApi = createApi({
  reducerPath: 'apiDestination',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getAllDes: builder.query({
      query: () => 'destination',
    }),
  }),
});

export const { useGetAllDesQuery } = destinationApi;
