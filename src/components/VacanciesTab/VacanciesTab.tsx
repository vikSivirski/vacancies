import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import VacanciesList from '../VacanciesList';
import { setCtiesFilterValue } from '../../store/slices/vacanciesFilterSlice';

type VacanciesTabPropTypes = {
	city: string;
};

const VacanciesTab = ({ city }: VacanciesTabPropTypes) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCtiesFilterValue(city));
	}, [city, dispatch]);

	return <VacanciesList />;
};

export default VacanciesTab;
