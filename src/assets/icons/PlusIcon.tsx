import type { FC, SVGProps } from 'react';
import { memo } from 'react';

const PlusIcon: FC<SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5v14m-7-7h14"
    ></path>
  </svg>
);

export default memo(PlusIcon);
