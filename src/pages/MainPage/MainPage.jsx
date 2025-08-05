import { AppShell, Flex, Stack, Title, Text, Container } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Form from '../../components/Form';
import Skills from '../../components/Skills';
import VacanciesList from '../../components/VacanciesList';
import CitiesFilter from '../../components/CitiesFilter';
import { setSearchTextForQuery } from '../../store/slices/vacanciesFilterSlice';

const MainPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();

	return (
		<AppShell.Main>
			<Container size={1000}>
				<Flex align="center" justify="space-between" mb={48}>
					<Stack gap={0}>
						<Title order={3}>Список вакансий</Title>
						<Text fw={500} color="#0F0F1080">
							по профессии Frontend-разработчик
						</Text>
					</Stack>
					<Form
						type="search"
						placeholder="Должность или название компании"
						style={{
							minWidth: 403,
						}}
						onSubmit={(searchText) => dispatch(setSearchTextForQuery(searchText))}
						setSearchParams={setSearchParams}
					/>
				</Flex>
				<Flex justify="space-between" align="start">
					<Stack w="31%" gap="md">
						<Skills setSearchParams={setSearchParams} />
						<CitiesFilter setSearchParams={setSearchParams} />
					</Stack>
					<VacanciesList searchParams={searchParams} />
				</Flex>
			</Container>
		</AppShell.Main>
	);
};

export default MainPage;
