import { NavLink, ThemeIcon } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconUserCircle } from '@tabler/icons-react';

const CustomNavLink = ({ label, to }) => {
	const location = useLocation();
	const isActive = location.pathname === to;

	return (
		<NavLink
			component={Link}
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
