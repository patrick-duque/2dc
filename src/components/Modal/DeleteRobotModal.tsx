import useRobotsStore from '@/store/useRobotsStore';
import Button from '../Button';
import Modal, { ModalProps } from './Modal';

interface Props extends ModalProps {
  id: string;
}

const DeleteRobotModal: React.FC<Props> = ({ closeModal, isOpen, id }) => {
  const deleteRobot = useRobotsStore((state) => state.removeRobot);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="w-96 space-y-6">
        <h4>Delete robot?</h4>
        <h6>Are you sure you want to delete this robot?</h6>
        <div className="mt-6 flex items-center justify-end gap-x-2">
          <Button text="CANCEL" onClick={closeModal} />
          <Button
            text="YES"
            className="bg-red-600 hover:bg-red-700"
            onClick={() => deleteRobot(id)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteRobotModal;
