import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const randomDesApi = createApi({
  reducerPath: 'randomDespath',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://random-data-api.com/api/v2' }),
  endpoints: (builder) => ({
    getRandoDes: builder.query({
      query: () => ({
        url: 'addresses',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetRandoDesQuery } = randomDesApi;
