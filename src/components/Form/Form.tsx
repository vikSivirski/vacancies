import { Dispatch, SetStateAction } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Flex } from '@mantine/core';
import { TbSearch, TbPlus } from 'react-icons/tb';

import { setFormValues } from '../../store/slices/vacanciesFilterSlice';
import { RootState } from '../../store/store';

type FormPropTypes = {
	type: 'search' | 'add';
	label?: string;
	placeholder: string;
	size: 'sm' | 'md' | 'lg' | 'xs';
	style?: React.CSSProperties;
	onSubmit: (value: string) => void;
	setSearchParams: Dispatch<SetStateAction<URLSearchParams>>;
};

const Form = ({
	type,
	label = '',
	placeholder,
	size = 'md',
	style = {},
	onSubmit = () => {},
	setSearchParams,
}: FormPropTypes) => {
	const dispatch = useDispatch();
	const value = useSelector((state: RootState) => state.vacancyFilter.formValues[type]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (value.trim()) {
			setSearchParams((prev) => {
				const curent = new URLSearchParams(prev);
				curent.set('text', value.trim());
				return curent;
			});
			onSubmit(value.trim());
			dispatch(setFormValues({ type, value: '' }));
		}
	};

	const submitBtnName = (type: 'search' | 'add') => {
		switch (type) {
			case 'search':
				return 'Найти';
			case 'add':
				return <TbPlus size={28} />;
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
					leftSection={type === 'search' ? <TbSearch size={18} /> : null}
					style={style}
					value={value}
					onChange={(e) => dispatch(setFormValues({ type, value: e.target.value }))}
				/>
				<Button
					w={type === 'add' ? 30 : undefined}
					p={type === 'add' ? 0 : undefined}
					size={size}
					type="submit"
					color="#4263EB"
				>
					{submitBtnName(type)}
				</Button>
			</Flex>
		</form>
	);
};

export default Form;
