import Button from '@/components/Button';

const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">
                ROBOTS TRACKER
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3 ">
            <Button
              text="Logout"
              className="font-medium bg-red-600 hover:bg-red-700"
              onClick={() => (window.location = '/logout' as string & Location)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
