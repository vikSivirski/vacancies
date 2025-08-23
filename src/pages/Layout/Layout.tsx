import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';

import Header from '../../components/Header';

const Layout = () => {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<Header />
			<Outlet />
		</AppShell>
	);
};

export default Layout;
