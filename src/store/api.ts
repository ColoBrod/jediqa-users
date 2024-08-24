import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL, API_SEED, API_RESULTS } from '~/constants';

export const api = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => `?seed=${API_SEED}&results=${API_RESULTS}`,
    }),
  })
});

export const { useGetAllUsersQuery } = api;




