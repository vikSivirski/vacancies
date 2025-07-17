import { AppShell, Flex, Stack, Title, Text, Container, TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

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
        <Container size={1000}>
          <Flex align="center" justify="space-between">
            <Stack gap={0}>
              <Title order={3}>Список вакансий</Title>
              <Text fw={500} color="#0F0F1080">
                по профессии Frontend-разработчик
              </Text>
            </Stack>
            <form>
              <Flex gap="sm">
                <TextInput
                  size="md"
                  placeholder="Должность или название компании"
                  leftSection={<IconSearch size={16} />}
                  style={{
                    minWidth: 403,
                  }}
                />
                <Button size="md" type="submit">
                  Найти
                </Button>
              </Flex>
            </form>
          </Flex>
          <Counter />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
