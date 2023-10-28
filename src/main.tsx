import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.tsx';
import USA from './Pages/USA.tsx';
import USSR from './Pages/USSR.tsx';
import 'remixicon/fonts/remixicon.css';

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/USA', element: <USA /> },
	{ path: '/USSR', element: <USSR /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
