import React from 'react';
import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './views/Login.tsx';
import { MainLayout } from './components/MainLayout/MainLayout.tsx';


const router = createBrowserRouter([
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <App/>
			}
		]
	},

	{
		path: '/login',
		element: <Login/>
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
