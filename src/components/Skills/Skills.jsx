import { Box, Flex, Pill, Stack, Title } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../Form';
import { addSkill, removeSkill } from '../../store/slices/vacanciesFilterSlice';

const Skills = () => {
	const skills = useSelector((state) => state.vacancyFilter.skills);
	const dispatch = useDispatch();

	const handleAddSkill = (name) => {
		const trimmedName = name.trim();
		if (trimmedName) dispatch(addSkill(trimmedName));
	};

	return (
		<Stack w="100%" p="md" style={{ borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
			<Box>
				<Title order={6} mb="xs">
					Ключевые навыки
				</Title>
				<Form type="add" placeholder="Навык" size="xs" style={{ minWidth: 227 }} onSubmit={handleAddSkill} />
			</Box>
			<Flex wrap="wrap" gap="sm">
				{skills.map((skill) => {
					return (
						<Pill key={crypto.randomUUID()} size="lg" withRemoveButton onRemove={() => dispatch(removeSkill(skill))}>
							{skill}
						</Pill>
					);
				})}
			</Flex>
		</Stack>
	);
};

export default Skills;
