import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Box, Button, Textarea, TextInput } from '@mantine/core';

import { RootState } from '../../store/store';
import { toggleEditing, setUserName, setSkills, setAboutText } from '../../store/slices/resumeSlice';

const ResumeForm = () => {
	const dispatch = useDispatch();
	const { userName, skills, aboutMe } = useSelector((state: RootState) => state.resume);
	const [skillsInput, setSkillsInput] = useState(skills.join(', '));

	const handleSubmit = () => {
		dispatch(
			setSkills(
				skillsInput
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)
			)
		);
		dispatch(toggleEditing());
	};

	return (
		<Box w="100%" p="md" style={{ display: 'block', width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
			<form onSubmit={handleSubmit}>
				<TextInput
					label="Фамилия Имя"
					size="md"
					mb="md"
					radius="md"
					placeholder="Фамилия Имя"
					value={userName}
					onChange={(e) => dispatch(setUserName(e.target.value))}
				/>
				<TextInput
					label="Навыки"
					size="md"
					mb="md"
					radius="md"
					placeholder="Ваши навыки"
					value={skillsInput}
					onChange={(e) => setSkillsInput(e.target.value)}
				/>
				<Textarea
					label="О себе"
					size="md"
					autosize
					mb="md"
					radius="md"
					placeholder="Расскажите о себе"
					value={aboutMe}
					onChange={(e) => dispatch(setAboutText(e.target.value))}
				/>
				<Button size="md" radius="md" type="submit">
					Сохранить изминения
				</Button>
			</form>
		</Box>
	);
};

export default ResumeForm;
