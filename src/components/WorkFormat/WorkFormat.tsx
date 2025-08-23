import { Flex, Badge } from '@mantine/core';

type WorkFormatItem = {
	id: string;
	name: string;
};

type WorkFormatPropTypes = {
	data: WorkFormatItem[];
};

const WorkFormat = ({ data }: WorkFormatPropTypes) => {
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

export default WorkFormat;
