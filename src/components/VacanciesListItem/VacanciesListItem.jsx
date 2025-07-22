import { Badge, Button, Flex, List, Text, Title } from '@mantine/core';

const VacanciesListItem = ({ item }) => {
  const { name, salary, experience, employer, work_format, address } = item;

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
      <Text fw={400} size="md">
        {address !== null ? address.city : null}
      </Text>
      <Flex gap="xs">
        <Button size="md" color="#0F0F10">
          Смотреть вакансию
        </Button>
        <Button size="md" variant="light">
          Откликнуться
        </Button>
      </Flex>
    </List.Item>
  );
};

export default VacanciesListItem;
