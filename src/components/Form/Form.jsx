import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Flex } from '@mantine/core';
import { IconSearch, IconPlus } from '@tabler/icons-react';

import { setFormValues } from '../../store/slices/vacanciesFilterSlice';

const Form = ({ type, label = '', placeholder, size = 'md', style = {}, onSubmit = () => {}, setSearchParams }) => {
	const dispatch = useDispatch();
	const value = useSelector((state) => state.vacancyFilter.formValues[type]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim()) {
			setSearchParams((prev) => {
				const curent = Object.fromEntries(prev.entries());
				return { ...curent, text: value.trim() };
			});
			onSubmit(value.trim());
			dispatch(setFormValues({ type, value: '' }));
		}
	};

	const submitBtnName = (type) => {
		switch (type) {
			case 'search':
				return 'Найти';
			case 'add':
				return <IconPlus size={28} />;
			default:
				break;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Flex gap="sm">
				<TextInput
					label={label}
					size={size}
					radius="md"
					placeholder={placeholder}
					leftSection={type === 'search' ? <IconSearch size={18} /> : null}
					style={style}
					value={value}
					onChange={(e) => dispatch(setFormValues({ type, value: e.target.value }))}
				/>
				<Button w={type === 'add' ? 30 : null} p={type === 'add' ? 0 : null} size={size} type="submit" color="#4263EB">
					{submitBtnName(type)}
				</Button>
			</Flex>
		</form>
	);
};

export default Form;
