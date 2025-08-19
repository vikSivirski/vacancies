import { Container, AppShell } from '@mantine/core';
import { useSelector } from 'react-redux';

import Resume from '../../components/Resume';
import ResumeForm from '../../components/ResumeForm';

const AboutMe = () => {
	const isEditing = useSelector((state) => state.resume.isEditing);
	const content = !isEditing ? <Resume /> : <ResumeForm />;
	return (
		<AppShell.Main>
			<Container size={1000}>{content}</Container>
		</AppShell.Main>
	);
};

export default AboutMe;
