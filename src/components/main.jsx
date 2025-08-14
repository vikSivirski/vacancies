import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { store } from '../store/store';

import './index.css';
import App from './App';

const theme = createTheme({
	primaryColor: 'dark',
	fontFamily: 'Open Sans, sans-serif',
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<HashRouter>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
					<App />
				</MantineProvider>
			</HashRouter>
		</Provider>
	</StrictMode>
);
