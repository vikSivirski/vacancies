import { LoaderFunction } from 'react-router-dom';

export const vacancyLoader: LoaderFunction = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`https://api.hh.ru/vacancies/${id}`);

	if (!res.ok) {
		throw new Response('Not Found', { status: 404 });
	}

	return null;
};
