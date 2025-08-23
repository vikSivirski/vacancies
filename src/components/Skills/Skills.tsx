import { Dispatch, SetStateAction } from 'react';
import { Box, Flex, Pill, Stack, Title } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../Form';
import { RootState } from '../../store/store';
import { addSkill, removeSkill } from '../../store/slices/vacanciesFilterSlice';

type SkillsPropTypes = {
	setSearchParams: Dispatch<SetStateAction<URLSearchParams>>;
};

const Skills = ({ setSearchParams }: SkillsPropTypes) => {
	const skills = useSelector((state: RootState) => state.vacancyFilter.skills);
	const dispatch = useDispatch();

	const handleAddSkill = (name: string) => {
		const trimmedName = name.trim();
		const updatedSkills = [...skills, trimmedName];
		if (trimmedName) {
			dispatch(addSkill(trimmedName));
			setSearchParams((prev) => {
				const current = new URLSearchParams(prev);
				current.set('skills', updatedSkills.join(','));
				return current;
			});
		}
	};

	const handleRemoveSkills = (name: string) => {
		const trimmedName = name.trim();
		const updatedSkills = skills.filter((s) => s !== trimmedName);
		dispatch(removeSkill(trimmedName));
		setSearchParams((prev) => {
			const current = new URLSearchParams(prev);
			current.set('skills', updatedSkills.join(','));
			return current;
		});
	};

	return (
		<Stack w="100%" p="md" style={{ borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
			<Box>
				<Title order={6} mb="xs">
					Ключевые навыки
				</Title>
				<Form
					type="add"
					placeholder="Навык"
					size="xs"
					style={{ minWidth: 227 }}
					onSubmit={handleAddSkill}
					setSearchParams={setSearchParams}
				/>
			</Box>
			<Flex wrap="wrap" gap="sm">
				{skills.map((skill) => {
					return (
						<Pill key={crypto.randomUUID()} size="lg" withRemoveButton onRemove={() => handleRemoveSkills(skill)}>
							{skill}
						</Pill>
					);
				})}
			</Flex>
		</Stack>
	);
};

export default Skills;
