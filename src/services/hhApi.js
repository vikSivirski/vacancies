import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hhApi = createApi({
	reducerPath: 'hhApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hh.ru/' }),
	endpoints: (builder) => ({
		getVacancies: builder.query({
			query: ({ page = 1, per_page = 10, text = '', search_field = '' } = {}) => {
				const params = new URLSearchParams({
					professional_role: '96',
					page,
					per_page,
				});
				if (text) params.set('text', text);
				if (search_field) params.set('search_field', search_field);
				return `vacancies?${params.toString()}`;
			},
		}),
	}),
});

export const { useGetVacanciesQuery } = hhApi;
export default hhApi;
