import { AppShell, Flex, Stack, Title, Text, Container, Tabs } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import Form from '../../components/Form';
import Skills from '../../components/Skills';
import { setSearchTextForQuery, setCtiesFilterValue, addSkill } from '../../store/slices/vacanciesFilterSlice';

const MainPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const { city } = useParams();
	const navigate = useNavigate();
	const activeTab = city === 'moscow' ? 'Москва' : city === 'petersburg' ? 'Санкт-Петербург' : 'Москва';

	const handleChange = (value) => {
		if (value === 'Москва') navigate('/vacancies/moscow');
		if (value === 'Санкт-Петербург') navigate('/vacancies/petersburg');
	};

	useEffect(() => {
		const params = Object.fromEntries(searchParams.entries());

		if (params.text) dispatch(setSearchTextForQuery(params.text));
		if (params.city) dispatch(setCtiesFilterValue(params.city));
		if (params.skills) {
			const skillsArray = params.skills.split(',');
			skillsArray.forEach((skill) => dispatch(addSkill(skill)));
		}
	}, []);

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
					</Stack>
					<Stack w="65%" gap="md">
						<Tabs color="#4263EB" defaultValue={activeTab} onChange={handleChange}>
							<Tabs.List mb="md">
								<Tabs.Tab value="Москва">Москва</Tabs.Tab>
								<Tabs.Tab value="Санкт-Петербург">Санкт-Петербург</Tabs.Tab>
							</Tabs.List>
						</Tabs>
						<Outlet />
					</Stack>
				</Flex>
			</Container>
		</AppShell.Main>
	);
};

export default MainPage;
