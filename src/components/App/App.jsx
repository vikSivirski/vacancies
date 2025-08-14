import { AppShell } from '@mantine/core';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header';
import MainPage from '../../pages/MainPage';
import VacanciesTab from '../VacanciesTab';
import AboutMe from '../../pages/AboutMe';
import AboutVacancyPage from '../../pages/AboutVacancyPage';

function App() {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<Header />
			<Routes>
				<Route path="/">
					<Route path="vacancies" element={<MainPage />}>
						<Route index element={<Navigate to="moscow" />} />
						<Route path="moscow" element={<VacanciesTab city="Москва" />} />
						<Route path="petersburg" element={<VacanciesTab city="Санкт-Петербург" />} />
					</Route>
					<Route path="about" element={<AboutMe />} />
					<Route path="vacancies/:id" element={<AboutVacancyPage />} />
				</Route>
			</Routes>
		</AppShell>
	);
}

export default App;
