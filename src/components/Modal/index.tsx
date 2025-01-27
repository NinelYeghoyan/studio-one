import {
  StyledModal,
  StyledModalContent,
  StyledModalTitle,
} from '@components/Modal/styles.ts';
import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <StyledModal onClick={onClose} className="flex-center cursor-pointer">
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        className="px-16 py-16 lg:px-20 lg:py-20 cursor-default"
      >
        <StyledModalTitle className="mb-16 lg:mb-20">{title}</StyledModalTitle>

        {children}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
