import { NativeSelect, Box } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

import { setCtiesFilterValue } from '../../store/slices/vacanciesFilterSlice';

const CitiesFilter = ({ setSearchParams }) => {
	const value = useSelector((state) => state.vacancyFilter.cityFilterValue);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const selectedValue = e.target.value;
		setSearchParams((prev) => {
			const current = Object.fromEntries(prev.entries());
			return { ...current, city: selectedValue };
		});
		dispatch(setCtiesFilterValue(selectedValue));
	};

	return (
		<Box w="100%" p="md" style={{ borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
			<NativeSelect value={value} onChange={(e) => handleChange(e)} data={['Все', 'Москва', 'Санкт-Питербург']} />
		</Box>
	);
};

export default CitiesFilter;
