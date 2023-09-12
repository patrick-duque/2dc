import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import Input from '@/components/Input/Input';
import { loginSchema } from '@/lib/validation';
import { useLoginQuery } from '@/services/queries/auth.query';
import { type LoginForm } from '@/types/auth';

const Login = () => {
  const { isLoading, mutate: login, isError, error } = useLoginQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    login(data);
  };

  return (
    <form
      className="w-4/5 mx-auto mt-40 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-center text-sm mb-2">Username: user</p>
      <p className="text-center text-sm mb-3">Password: user</p>
      <Input
        errors={errors}
        placeholder="Username"
        label="Username"
        id="username"
        register={register}
        name="username"
      />
      <Input
        errors={errors}
        placeholder="Password"
        label="Password"
        type="password"
        register={register}
        name="password"
      />
      <Button text="Login" type="submit" isLoading={isLoading} />
    </form>
  );
};

export default Login;
