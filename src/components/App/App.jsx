import { AppShell, Flex, Stack, Title, Text, Container } from '@mantine/core';
import { useDispatch } from 'react-redux';

import logo from '../../assets/image2.svg';
import CustomNavLink from '../CustomNavLink';
import Form from '../Form';
import Skills from '../Skills';
import VacanciesList from '../VacanciesList';
import { setSearchTextForQuery } from '../../store/slices/vacanciesFilterSlice';

function App() {
	const dispatch = useDispatch();

	return (
		<AppShell header={{ height: 60 }} padding="md">
			<AppShell.Header>
				<Flex justify="space-between" px="md" py="sm">
					<Flex gap="sm">
						<img src={logo} alt="Logo" height={30} />
						<Title order={3}>.FrontEnd</Title>
					</Flex>
					<Flex align="center">
						<CustomNavLink label="Вакансии FE" isActive={true} />
						<CustomNavLink label="Обо мне" isActive={false} />
					</Flex>
				</Flex>
			</AppShell.Header>
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
						/>
					</Flex>
					<Flex justify="space-between" align="start">
						<Skills />
						<VacanciesList />
					</Flex>
				</Container>
			</AppShell.Main>
		</AppShell>
	);
}

export default App;
