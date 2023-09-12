import Spinner from '@/components/Spinner';
import cn from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  className,
  children,
  ...props
}) => (
  <button
    type="button"
    className={cn(
      'px-5 py-2.5',
      'text-center min-w-[100px] rounded-lg',
      'bg-black hover:bg-black',
      'text-white text-sm font-medium',
      'transition duration-300',
      className,
    )}
    {...props}
  >
    {isLoading ? <Spinner /> : children ?? text}
  </button>
);

export default Button;
