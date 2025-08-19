import { Route, Navigate, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Layout from '../../pages/Layout';
import MainPage from '../../pages/MainPage';
import VacanciesTab from '../VacanciesTab';
import AboutMe from '../../pages/AboutMe';
import AboutVacancyPage from '../../pages/AboutVacancyPage';
import ErrorPage from '../../pages/ErrorPage';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route path="vacancies" element={<MainPage />}>
					<Route index element={<Navigate to="moscow" />} />
					<Route path="moscow" element={<VacanciesTab city="Москва" />} />
					<Route path="petersburg" element={<VacanciesTab city="Санкт-Петербург" />} />
				</Route>
				<Route path="about" element={<AboutMe />} />
				<Route path="vacancies/:id" element={<AboutVacancyPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
