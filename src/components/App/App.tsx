import { Route, Navigate, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { vacancyLoader } from '../../services/vacancyLoader';
import Layout from '../../pages/Layout';
import VacanciesPage from '../../pages/VacanciesPage';
import VacanciesTab from '../VacanciesTab';
import AboutMe from '../../pages/AboutMe';
import AboutVacancyPage from '../../pages/AboutVacancyPage';
import ErrorPage from '../../pages/ErrorPage';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
				<Route path="vacancies" element={<VacanciesPage />} errorElement={<ErrorPage />}>
					<Route index element={<Navigate to="moscow" />} />
					<Route path="moscow" element={<VacanciesTab city="Москва" />} />
					<Route path="petersburg" element={<VacanciesTab city="Санкт-Петербург" />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
				<Route
					path="vacancies/:id"
					element={<AboutVacancyPage />}
					loader={vacancyLoader}
					errorElement={<ErrorPage />}
				/>
				<Route path="about" element={<AboutMe />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
