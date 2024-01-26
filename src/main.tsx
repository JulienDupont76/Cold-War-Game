import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.tsx';
import Usa from './Pages/USA.tsx';
import Ussr from './Pages/USSR.tsx';
import 'remixicon/fonts/remixicon.css';

const router = createBrowserRouter([
	{ path: '/Cold-War-Game', element: <HomePage /> },
	{ path: '/Cold-War-Game/Usa', element: <Usa /> },
	{ path: '/Cold-War-Game/USSR', element: <Ussr /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
