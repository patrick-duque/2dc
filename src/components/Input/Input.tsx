import { type InputHTMLAttributes } from 'react';
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';
import cn from 'classnames';

export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<U>;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  className,
  ...rest
}: Props<T, U>) => {
  return (
    <div className="flex flex-col">
      <label className="flex" htmlFor={name}>
        {label ?? ''}
      </label>
      <input
        className={cn('border rounded-lg p-2 w-full', className)}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...(register && register(name as Path<T>))}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="">{errors[name as keyof U]?.message as string}</span>
      )}
    </div>
  );
};

export default Input;
