import { useMutation } from '@tanstack/react-query';
import { type LoginBody } from '@/types/auth';
import { login } from '../api/auth.service';
import { setItem } from '@/lib/localStorage';
import { useNavigate } from 'react-router';

export const useLoginQuery = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: LoginBody) => {
      const res = await login(body);
      return res;
    },
    onSuccess: () => {
      setItem('isAuthenticated', true);
      navigate('/');
    },
  });
};
