import { AVATARS, AVATAR_URL } from '@/lib/constants';
import { getItem, setItem } from '@/lib/localStorage';
import { create } from 'zustand';

export interface Robot {
  id: string;
  name: string;
  purpose: string;
  avatar: string;
}

interface CreateRobotPayload {
  name: string;
  purpose: string;
}

interface EditRobotPayload extends CreateRobotPayload {
  id: string;
}

interface RobotsState {
  robots: Robot[];
}

const getRandomAvatarIndex = (): string => {
  const min = 0;
  const max = AVATARS.length - 1;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return AVATAR_URL + AVATARS[randomIndex];
};

export interface AuthStore extends RobotsState {
  addRobot: (robot: CreateRobotPayload) => void;
  removeRobot: (id: string) => void;
  editRobot: (robot: EditRobotPayload) => void;
}

const initialState: Pick<AuthStore, keyof RobotsState> = {
  robots: getItem('robots') ?? [
    {
      id: 'test1',
      name: 'robot 1',
      purpose: 'to clean',
      avatar: AVATAR_URL + AVATARS[0],
    },
  ],
};

const useRobotsStore = create<AuthStore>((set) => ({
  ...initialState,
  addRobot: (robot) => {
    set((state) => {
      const robots = [
        ...state.robots,
        {
          ...robot,
          id: Math.random().toString(),
          avatar: getRandomAvatarIndex(),
        },
      ];
      setItem('robots', robots);

      return { robots };
    });
  },
  removeRobot: (id) => {
    set((state) => {
      const robots = state.robots.filter((robot) => robot.id !== id);
      setItem('robots', robots);

      return { robots };
    });
  },
  editRobot: (robot) => {
    set((state) => {
      if (!robot.id) return { robots: state.robots };

      const robotIndex = state.robots.findIndex(
        (_robot) => _robot.id === robot.id,
      );
      const robots = [...state.robots];

      if (robotIndex >= 0) {
        robots[robotIndex] = {
          ...robot,
          avatar: robots[robotIndex].avatar,
        } as Robot;
      }

      setItem('robots', robots);

      return { robots };
    });
  },
}));

export default useRobotsStore;
