import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {House} from "../types/house";

export const houseApi = createApi({
  reducerPath: 'houseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:3000'}),
  endpoints: (builder) => ({
    getHouses: builder.query<House, void>({
      query: () => '/houses',
    }),
  }),
});

export const { useGetHousesQuery } = houseApi;

