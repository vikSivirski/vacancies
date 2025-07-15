import { AppShell, Flex, Stack, Title, Text } from '@mantine/core';

import logo from '../../assets/image2.svg';
import Counter from '../Counter';
import CustomNavLink from '../CustomNavLink';

function App() {
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
        <Stack gap={0}>
          <Title order={1}>Список вакансий</Title>
          <Text fw={500} color="#0F0F1080">
            по профессии Frontend-разработчик
          </Text>
        </Stack>
        <Counter />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
