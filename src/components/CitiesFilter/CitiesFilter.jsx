import { NativeSelect, Box } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

import { setCtiesFilterValue } from '../../store/slices/vacanciesFilterSlice';

const CitiesFilter = () => {
	const value = useSelector((state) => state.vacancyFilter.cityFilterValue);
	const dispatch = useDispatch();

	return (
		<Box w="100%" p="md" style={{ borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
			<NativeSelect
				value={value}
				onChange={(e) => dispatch(setCtiesFilterValue(e.target.value))}
				data={['Все', 'Москва', 'Санкт-Питербург']}
			/>
		</Box>
	);
};

export default CitiesFilter;
