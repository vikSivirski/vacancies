import { NavLink as MantineNavLink, ThemeIcon } from '@mantine/core';
import { NavLink, useMatch } from 'react-router-dom';
import { IconUserCircle } from '@tabler/icons-react';

const CustomNavLink = ({ label, to }) => {
	const match = useMatch(to === '/vacancies' ? '/vacancies/*' : to);
	const isActive = Boolean(match);

	return (
		<MantineNavLink
			component={NavLink}
			to={to}
			label={label}
			rightSection={isActive ? <ThemeIcon size={6} radius="xl" color="blue" /> : null}
			leftSection={label === 'Обо мне' ? <IconUserCircle size={18} /> : null}
			styles={{
				label: {
					whiteSpace: 'nowrap',
					color: isActive ? 'black' : '#0F0F1080',
					fontWeight: 700,
				},
			}}
			px="sm"
			py={4}
		/>
	);
};

export default CustomNavLink;
