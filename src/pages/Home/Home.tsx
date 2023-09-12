import Button from '@/components/Button';
import Input from '@/components/Input';
import useRobotsStore from '@/store/useRobotsStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { RobotModal } from '@/components/Modal';
import RobotCard from '@/components/common/RobotCard';

const Home = () => {
  const robots = useRobotsStore((state) => state.robots);

  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');

  const filteredRobots = useMemo(() => {
    if (search) {
      return robots.filter((robot) =>
        robot.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return robots;
  }, [search, robots]);

  const searchRobot = debounce((text: string) => setSearch(text), 800);

  return (
    <div>
      <div className="flex items-end justify-between gap-x-4">
        <div className="flex items-end gap-x-4">
          <Input
            name="search"
            label="Search"
            placeholder="Search Robot Name"
            defaultValue={search}
            onChange={(e) => searchRobot(e.target.value)}
          />
        </div>
        <Button
          text="Create"
          type="button"
          className="bg-green-400 hover:bg-green-500 text-[#232323] h-10"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {filteredRobots.map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>
      <RobotModal closeModal={() => setOpenModal(false)} isOpen={openModal} />
    </div>
  );
};

export default Home;
