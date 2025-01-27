import PlusIcon from '@assets/icons/PlusIcon.tsx';
import { StyledAddButton } from '@components/AddButton/styled.ts';
import type { FC } from 'react';

type AddButtonProps = {
  onClick: () => void;
};

const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <StyledAddButton
      className="flex-center fixed cursor-pointer"
      onClick={onClick}
    >
      <PlusIcon />
    </StyledAddButton>
  );
};

export default AddButton;
