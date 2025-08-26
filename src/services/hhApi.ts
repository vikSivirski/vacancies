import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetVacanciesParams {
	page?: number;
	per_page?: number;
	text?: string;
	search_field?: string;
	cityFilterValue?: string;
}

const setOptionalParams = (params: URLSearchParams, options: { text?: string; search_field?: string }) => {
	if (options.text) params.set('text', options.text);
	if (options.search_field) params.set('search_field', options.search_field);
};

const setCityParam = (params: URLSearchParams, city: string) => {
	switch (city) {
		case 'Москва':
			params.set('area', '1');
			break;
		case 'Санкт-Петербург':
			params.set('area', '2');
			break;
		default:
			break;
	}
};

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
					page: `${page}`,
					per_page: `${per_page}`,
				});
				setOptionalParams(params, { text, search_field });
				setCityParam(params, cityFilterValue);

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
