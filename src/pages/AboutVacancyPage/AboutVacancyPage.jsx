import { AppShell, Badge, Button, Container, Flex, Box, Text, Title, Loader } from '@mantine/core';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetVacanciesQuery, useGetVancyByIdQuery } from '../../services/hhApi';

const AboutVacancyPage = () => {
	const { id } = useParams();

	const { page, perPage, skills, searchTextForQuery, cityFilterValue } = useSelector((state) => state.vacancyFilter);
	const skillsString = skills.join(' ');
	const { data, isLoading } = useGetVacanciesQuery({
		page,
		per_page: perPage,
		text: `${skillsString} ${searchTextForQuery}`,
		cityFilterValue: cityFilterValue,
	});

	if (isLoading) return <Loader />;
	const vacanciesData = data !== undefined ? data.items : [];
	const vacancy = vacanciesData.find((v) => v.id === id);

	const { data: item } = useGetVancyByIdQuery(vacancy.id);
	const vacancyDescription = item !== undefined ? item.description : '';

	const { name, salary, experience, employer, work_format, address, alternate_url } = vacancy;
	const salaryFork = (data) => {
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

	const workFormat = (data) => {
		return (
			<Flex gap="xs" mb="xs">
				{data.map((item) => {
					if (item.name.includes('работодателя')) {
						return (
							<Badge key={item.id} variant="light" radius="xs" color="gray">
								Офис
							</Badge>
						);
					} else if (item.name === 'Гибрид') {
						return (
							<Badge key={item.id} color="#0F0F10" radius="xs">
								{item.name}
							</Badge>
						);
					} else if (item.name === 'Удалённо') {
						return (
							<Badge key={item.id} color="#4263EB" radius="xs">
								Можно удаленно
							</Badge>
						);
					}
				})}
			</Flex>
		);
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
					{workFormat(work_format)}
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
					<Box>{parse(vacancyDescription)}</Box>
				</Box>
			</Container>
		</AppShell.Main>
	);
};

export default AboutVacancyPage;
