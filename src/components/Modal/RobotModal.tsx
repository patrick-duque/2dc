import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import Modal, { ModalProps } from './Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { robotSchema } from '@/lib/validation';
import Button from '../Button';
import useRobotsStore from '@/store/useRobotsStore';
import { useEffect, useMemo } from 'react';

interface RobotModalForm {
  name: string;
  purpose: string;
}

interface Props extends ModalProps {
  id?: string;
}

const RobotModal: React.FC<Props> = ({ closeModal, isOpen, id }) => {
  const { addRobot, robots, editRobot } = useRobotsStore((state) => state);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RobotModalForm>({ resolver: yupResolver(robotSchema) });

  const onSubmit: SubmitHandler<RobotModalForm> = (data) => {
    if (id) {
      editRobot({ ...data, id });
    } else {
      addRobot(data);
    }
    closeModal();
  };

  const selectedRobot = useMemo(
    () => robots.find((robot) => robot.id === id),
    [id, robots],
  );

  useEffect(() => {
    if (selectedRobot) {
      setValue('name', selectedRobot.name);
      setValue('purpose', selectedRobot.purpose);
    }
  }, [selectedRobot]);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="w-96 space-y-6">
        <p>Create Robot</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            errors={errors}
            placeholder="name"
            label="Robot Name"
            id="name"
            register={register}
            name="name"
          />
          <Input
            errors={errors}
            placeholder="purpose"
            label="Robot Purpose"
            id="purpose"
            register={register}
            name="purpose"
          />
          <Button
            text="CREATE"
            type="submit"
            className="bg-green-400 hover:bg-green-500 !text-[#232323] w-full"
          />
        </form>
      </div>
    </Modal>
  );
};

export default RobotModal;
