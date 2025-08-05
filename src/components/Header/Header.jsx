import { AppShell, Flex, Title } from '@mantine/core';

import logo from '../../assets/image2.svg';
import CustomNavLink from '../CustomNavLink';

const Header = () => {
	return (
		<AppShell.Header>
			<Flex justify="space-between" px="md" py="sm">
				<Flex gap="sm">
					<img src={logo} alt="Logo" height={30} />
					<Title order={3}>.FrontEnd</Title>
				</Flex>
				<Flex align="center">
					<CustomNavLink label="Вакансии FE" to="/vacancies" />
					<CustomNavLink label="Обо мне" to="/about" />
				</Flex>
			</Flex>
		</AppShell.Header>
	);
};

export default Header;
