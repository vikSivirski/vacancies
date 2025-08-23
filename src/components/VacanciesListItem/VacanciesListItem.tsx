import { Button, Flex, List, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import WorkFormat from '../WorkFormat';

interface Vacancy {
	id: string;
	name: string;
	salary: { from: number | null; to: number | null } | null;
	experience: { name: string };
	employer: { name: string };
	work_format: { id: string; name: string }[];
	address: { city: string };
	alternate_url: string;
}

type VacancyListItemPropType = {
	item: Vacancy;
};

const VacanciesListItem = ({ item }: VacancyListItemPropType) => {
	const { name, salary, experience, employer, work_format, address, alternate_url } = item;
	console.log(item);

	const salaryFork = (data: Vacancy['salary']) => {
		if (data !== null) {
			if (data.to === null) {
				return `${data.from} ₽`;
			} else if (data.from === null) {
				return `до ${data.to} ₽`;
			} else {
				return `${data.from} - ${data.to} ₽`;
			}
		} else {
			return 'Зарплата не указана';
		}
	};

	return (
		<List.Item
			mb="md"
			p="md"
			style={{ display: 'block', width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF' }}
		>
			<Title order={3} fw={600} style={{ color: '#364FC7' }}>
				{name}
			</Title>
			<Flex gap="md" mb="md">
				<Text fw={400} size="xl">
					{salaryFork(salary)}
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
				<Button size="sm" color="#0F0F10" component={Link} to={`/vacancies/${item.id}`}>
					Смотреть вакансию
				</Button>
				<Button size="sm" variant="light" component="a" href={alternate_url}>
					Откликнуться
				</Button>
			</Flex>
		</List.Item>
	);
};

export default VacanciesListItem;
