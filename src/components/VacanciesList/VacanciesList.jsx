import { List, Box, Pagination, Center, Loader, Text } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

import { useGetVacanciesQuery } from '../../services/hhApi';
import { setPage } from '../../store/slices/vacanciesFilterSlice';
import VacanciesListItem from '../VacanciesListItem';

const VacanciesList = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.vacancyFilter.page);
	const perPage = useSelector((state) => state.vacancyFilter.perPage);
	const skills = useSelector((state) => state.vacancyFilter.skills);
	const searchTextForQuery = useSelector((state) => state.vacancyFilter.searchTextForQuery);
	const citiesFilter = useSelector((state) => state.vacancyFilter.cityFilterValue);

	const skillsString = skills.join(' ');
	const { data, isFetching } = useGetVacanciesQuery(
		{
			page,
			per_page: perPage,
			text: `${skillsString} ${searchTextForQuery}`,
			cityFilterValue: citiesFilter,
		},
		{ skip: !citiesFilter }
	);

	const vacanciesData = data !== undefined ? data.items : [];
	const vacanciesItems = vacanciesData.map((item) => {
		return <VacanciesListItem item={item} key={item.id} />;
	});

	const content = isFetching ? (
		<Center>
			<Loader />
		</Center>
	) : (
		<>
			<List listStyleType="none" w="100%">
				{vacanciesItems}
			</List>
			<Center>
				<Pagination total={data?.pages - 1} value={page} onChange={(p) => dispatch(setPage(p))} mt="md" radius="xs" />
			</Center>
		</>
	);
	const notFoundMessage = 'По указанным параметрам вакнсий не нашлось :(';
	const notFound =
		vacanciesData.length === 0 && !isFetching ? (
			<Center>
				<Text size="lg">{notFoundMessage}</Text>
			</Center>
		) : null;

	return (
		<Box w="100%">
			{content}
			{notFound}
		</Box>
	);
};

export default VacanciesList;
