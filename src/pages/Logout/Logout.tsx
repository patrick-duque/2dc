import { removeItem } from '@/lib/localStorage';
import useAuthStore from '@/store/useAuthStore';
import { useEffect } from 'react';

const Logout = () => {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  useEffect(() => {
    removeItem('isAuthenticated');
    setIsAuthenticated(false);
  }, []);

  return <></>;
};

export default Logout;
