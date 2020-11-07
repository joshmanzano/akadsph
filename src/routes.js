import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import TutorView from 'src/views/customer/TutorView';
import DashboardView from 'src/views/reports/DashboardView';
import PlaygroundView from 'src/views/test/PlaygroundView';
import AuthView from 'src/views/test/AuthView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import LandingPage from 'src/LandingPage';
import Login from 'src/components/login';

const routes = [
  {
    path: '/',
    element: <LandingPage/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/parent',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <React.Fragment><AccountView /></React.Fragment> },
      { path: 'customers', element: <React.Fragment><TutorView/></React.Fragment> },
      { path: 'dashboard', element: <React.Fragment><DashboardView/></React.Fragment> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <React.Fragment><SettingsView/></React.Fragment> },
      { path: 'playground', element: <PlaygroundView /> },
      { path: 'auth', element: <AuthView /> },
      { path: '*', element: <NotFoundView /> }
    ]
  }
];

export default routes;
