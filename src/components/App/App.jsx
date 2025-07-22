import { AppShell, Flex, Stack, Title, Text, Container } from '@mantine/core';

import logo from '../../assets/image2.svg';
import { useGetVacanciesQuery } from '../../services/hhApi';
import Counter from '../Counter';
import CustomNavLink from '../CustomNavLink';
import Form from '../Form';
import VacanciesList from '../VacanciesList';

function App() {
  const { data } = useGetVacanciesQuery();
  console.log(data);
  const vacanciesData = data !== undefined ? data.items : [];
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Flex justify="space-between" px="md" py="sm">
          <Flex gap="sm">
            <img src={logo} alt="Logo" height={30} />
            <Title order={3}>.FrontEnd</Title>
          </Flex>
          <Flex align="center">
            <CustomNavLink label="Вакансии FE" isActive={true} />
            <CustomNavLink label="Обо мне" isActive={false} />
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Container size={1000}>
          <Flex align="center" justify="space-between" mb="md">
            <Stack gap={0}>
              <Title order={3}>Список вакансий</Title>
              <Text fw={500} color="#0F0F1080">
                по профессии Frontend-разработчик
              </Text>
            </Stack>
            <Form
              type="search"
              placeholder="Должность или название компании"
              style={{
                minWidth: 403,
              }}
            />
          </Flex>
          <Flex justify="space-between">
            <Counter />
            <VacanciesList data={vacanciesData} />
          </Flex>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
