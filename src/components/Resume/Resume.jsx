import { Box, Flex, List, Text, Title, UnstyledButton } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IconEdit } from '@tabler/icons-react';

import { toggleEditing } from '../../store/slices/resumeSlice';

const Resume = () => {
	const dispatch = useDispatch();
	const { userName, skills, aboutMe } = useSelector((state) => state.resume);
	return (
		<Box w="100%" p="md" style={{ display: 'block', width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
			<Flex justify="space-between" align="start" mb="md">
				<Title>{userName}</Title>
				<UnstyledButton onClick={() => dispatch(toggleEditing())}>{<IconEdit />}</UnstyledButton>
			</Flex>
			<Title order={3}>Мои навыки</Title>
			<List mb="md">
				{skills.map((skill) => (
					<List.Item key={crypto.randomUUID()}>{skill}</List.Item>
				))}
			</List>
			<Title order={3}>Обо мне</Title>
			<Text>{aboutMe}</Text>
		</Box>
	);
};

export default Resume;
