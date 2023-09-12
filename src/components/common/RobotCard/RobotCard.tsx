import { DeleteRobotModal, RobotModal } from '@/components/Modal';
import { type Robot } from '@/store/useRobotsStore';
import { useState } from 'react';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';

interface Props {
  robot: Robot;
}

const RobotCard: React.FC<Props> = ({ robot }) => {
  const [openDeleteRobot, setOpenDeleteRobot] = useState(false);
  const [openEditRobot, setOpenEditRobot] = useState(false);

  return (
    <>
      <div className="bg-gray-100 p-4 rounded shadow">
        <div className="flex items-center gap-x-4 justify-end">
          <button onClick={() => setOpenEditRobot(true)}>
            <BsPencilFill className="text-gray-400 h-5 w-5" />
          </button>
          <button onClick={() => setOpenDeleteRobot(true)}>
            <BsFillTrashFill className="text-red-700 h-5 w-5" />
          </button>
        </div>
        <img src={robot.avatar} width={150} height={150} className="mx-auto" />
        <div className="px-3">
          <p className="truncate max-w-full">Name: {robot.name}</p>
          <p className="truncate max-w-full">Purpose: {robot.purpose}</p>
        </div>
      </div>
      <DeleteRobotModal
        closeModal={() => setOpenDeleteRobot(false)}
        isOpen={openDeleteRobot}
        id={robot.id}
      />
      <RobotModal
        isOpen={openEditRobot}
        closeModal={() => setOpenEditRobot(false)}
        id={robot.id}
      />
    </>
  );
};

export default RobotCard;
