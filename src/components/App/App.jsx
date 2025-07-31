import { AppShell } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import MainPage from '../../pages/MainPage';
import AboutMe from '../../pages/AboutMe';
import AboutVacancyPage from '../../pages/AboutVacancyPage';

function App() {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<AboutMe />} />
				<Route path="/vacancy/:id" element={<AboutVacancyPage />} />
			</Routes>
		</AppShell>
	);
}

export default App;
