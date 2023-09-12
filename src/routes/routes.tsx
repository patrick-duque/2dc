import AppWrapper from '@/components/Layouts/AppWrapper';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Logout from '@/pages/Logout/Logout';

export const PRIVATE_ROUTES = [
  {
    index: true,
    path: '/',
    label: 'Home',
    element: () => (
      <AppWrapper>
        <Home />
      </AppWrapper>
    ),
  },
  {
    path: '/logout',
    label: 'Logout',
    element: () => <Logout />,
  },
];

export const PUBLIC_ROUTES = [
  {
    index: true,
    path: '/*',
    label: 'login',
    element: () => <Login />,
  },
];
