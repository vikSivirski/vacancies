import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetVacanciesParams {
	page?: string;
	per_page?: string;
	text: string;
	search_field: string;
	cityFilterValue: string;
}

const hhApi = createApi({
	reducerPath: 'hhApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hh.ru/' }),
	endpoints: (builder) => ({
		getVacancies: builder.query({
			query: ({
				page = 1,
				per_page = 10,
				text = '',
				search_field = '',
				cityFilterValue = 'Москва',
			}: GetVacanciesParams = {}) => {
				const params = new URLSearchParams({
					professional_role: '96',
					page,
					per_page,
				});
				if (text) params.set('text', text);
				if (search_field) params.set('search_field', search_field);

				switch (cityFilterValue) {
					case 'Москва':
						params.set('area', '1');
						break;
					case 'Санкт-Петербург':
						params.set('area', '2');
						break;
					default:
				}

				return `vacancies?${params.toString()}`;
			},
		}),
		getVancyById: builder.query({
			query: (id) => `vacancies/${id}`,
		}),
		getEmployer: builder.query({
			query: (id) => `https://api.hh.ru/employers/${id}`,
		}),
	}),
});

export const { useGetVacanciesQuery, useGetVancyByIdQuery, useGetEmployerQuery } = hhApi;
export default hhApi;
