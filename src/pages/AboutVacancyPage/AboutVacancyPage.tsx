import { AppShell, Button, Container, Flex, Box, Text, Title, Loader } from '@mantine/core';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { useGetVancyByIdQuery } from '../../services/hhApi';
import WorkFormat from '../../components/WorkFormat';

const AboutVacancyPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data: vacancy, isLoading } = useGetVancyByIdQuery(id);

	if (isLoading) return <Loader />;
	if (!vacancy) return <Text>Вакансия не найдена</Text>;

	const { name, salary, experience, employer, work_format, address, alternate_url, description } = vacancy;
	const salaryFork = (data: { from: string | null; to: string | null } | null) => {
		if (data !== null) {
			if (data.to === null) {
				return `${data.from}`;
			} else {
				return `${data.from} - ${data.to}`;
			}
		} else {
			return 'Зарплата не указана';
		}
	};

	return (
		<AppShell.Main>
			<Container size={658}>
				<Box
					mb="md"
					p="md"
					style={{ display: 'block', width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF' }}
				>
					<Title order={3} fw={600} style={{ color: '#364FC7' }}>
						{name}
					</Title>
					<Flex gap="md" mb="md">
						<Text fw={400} size="xl">
							{salaryFork(salary)} ₽
						</Text>
						<Text fw={400} size="md" color="#0F0F1080">
							{experience.name}
						</Text>
					</Flex>
					<Text mb="xs" fw={400} size="md" color="#0F0F1080">
						{employer.name}
					</Text>
					<WorkFormat data={work_format} />
					<Text fw={400} size="md" mb="md">
						{address !== null ? address.city : null}
					</Text>
					<Flex gap="xs">
						<Button size="sm" color="#0F0F10" component="a" href={alternate_url}>
							Откликнуться на hh.ru
						</Button>
					</Flex>
				</Box>
				<Box
					mb="md"
					p="md"
					style={{ display: 'block', width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF' }}
				>
					<Title order={2}>Компания</Title>
					<Box>{parse(description)}</Box>
				</Box>
			</Container>
		</AppShell.Main>
	);
};

export default AboutVacancyPage;
