import { List, Box, Pagination, Center } from '@mantine/core';
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
	const { data } = useGetVacanciesQuery({
		page,
		per_page: perPage,
		text: `${skillsString} ${searchTextForQuery}`,
		cityFilterValue: citiesFilter,
	});

	const vacanciesData = data !== undefined ? data.items : [];

	const vacanciesItems = vacanciesData.map((item) => {
		return <VacanciesListItem item={item} key={item.id} />;
	});

	return (
		<Box w="65%">
			<List listStyleType="none" w="100%">
				{vacanciesItems}
			</List>
			<Center>
				<Pagination
					total={data?.pages || Math.ceil(data?.found / perPage)}
					value={page}
					onChange={(p) => dispatch(setPage(p))}
					mt="md"
					radius="xs"
				/>
			</Center>
		</Box>
	);
};

export default VacanciesList;
