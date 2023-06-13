import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import './styles/global.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<App />
					<Toaster />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>
);
