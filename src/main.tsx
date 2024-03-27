

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './views/MainPage/MainPage.tsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
