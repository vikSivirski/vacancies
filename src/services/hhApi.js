import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hhApi = createApi({
  reducerPath: 'hhApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hh.ru/' }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: () => 'vacancies?professional_role=96',
    }),
  }),
});

export const { useGetVacanciesQuery } = hhApi;
export default hhApi;
