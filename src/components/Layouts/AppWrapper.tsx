import { PropsWithChildren } from 'react';
import Header from '../Header';

type Props = PropsWithChildren;

const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="h-[calc(100vh-60px)] container mx-auto py-20">
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;
