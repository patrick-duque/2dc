import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuthStore from '@/store/useAuthStore';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';
import Header from '@/components/Header';

const Router: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const routes = useMemo(
    () => (isAuthenticated ? PRIVATE_ROUTES : PUBLIC_ROUTES),
    [isAuthenticated],
  );

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, index }) => (
          <Route
            key={Math.random()}
            path={path}
            index={Boolean(index)}
            element={element()}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
