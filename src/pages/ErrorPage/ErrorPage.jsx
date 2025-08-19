import { AppShell, Box, Container, Stack, Title, Text, Flex, Button, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

import sadCat from '../../assets/sad-cat.gif';

const ErrorPage = () => {
	return (
		<AppShell p="md">
			<AppShell.Main>
				<Container size={707}>
					<Stack p="lg" style={{ display: 'block', width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF' }}>
						<Flex mb="md" justify="space-between" align="center">
							<Box w={408}>
								<Title order={1} mb="md">
									Упс! Такой страницы не существует
								</Title>
								<Text>Давайте перейдём к началу.</Text>
							</Box>
							<Button size="lg" color="#4263EB" component={Link} to="/vacancies">
								На главную
							</Button>
						</Flex>
						<Image w="100%" radius="md" src={sadCat} />
					</Stack>
				</Container>
			</AppShell.Main>
		</AppShell>
	);
};

export default ErrorPage;
