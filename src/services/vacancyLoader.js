export async function vacancyLoader({ params }) {
	const { id } = params;
	const res = await fetch(`https://api.hh.ru/vacancies/${id}`);

	if (!res.ok) {
		throw new Response('Not Found', { status: 404 });
	}

	return null;
}
