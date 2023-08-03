import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '~components/Layout/Layout';
import { ROUTES } from '~constants/ROUTES';
import { ArchivePage } from '~pages/ArchivePage/ArchivePage';
import { HomePage } from '~pages/HomePage/HomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ element: <HomePage />, index: true },
			{ element: <ArchivePage />, path: `${ROUTES.archive}` },
		],
	},
]);

export function AppRouter() {
	return <RouterProvider router={router} />;
}
