import { StyledLoader } from '@components/Loader/styled';
import type { FC } from 'react';

const Loader: FC = () => (
  <StyledLoader className="animation-load w-full h-full flex-center">
    <span className="animation-load-button animation-load-button-single" />
    <span className="animation-load-button animation-load-button-double" />
    <span className="animation-load-button animation-load-button-single" />
    <span className="animation-load-button animation-load-button-double" />
  </StyledLoader>
);

export default Loader;
