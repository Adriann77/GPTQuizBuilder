import React from 'react';
import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './components/MainLayout/MainLayout.tsx';
import LandingPage from './views/LandingPage.tsx';
import StatsPage from './views/StatsPage.tsx';
import { QuestionBankProvider } from './context/QuestionBankContext.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/form?',
        element: <App />,
      },
      {
        path: '/stats?',
        element: <StatsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuestionBankProvider>
      <RouterProvider router={router} />
    </QuestionBankProvider>

  </React.StrictMode>,
);
