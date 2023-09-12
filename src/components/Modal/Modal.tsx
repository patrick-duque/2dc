import { PropsWithChildren } from 'react';
import { MdOutlineClose } from 'react-icons/md';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow max-w-[calc(100vw-400px)] relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <MdOutlineClose className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
