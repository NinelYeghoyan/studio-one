import styled, { keyframes } from 'styled-components';

const single = keyframes`
  0% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(3px);
  }
`;

const double = keyframes`
  0% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
`;

export const StyledLoader = styled.div`
  .animation-load-button {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    display: inline-block;

    margin-left: 4px;

    background-color: ${(p) => p.theme.palette.primary};
  }

  .animation-load-button-single {
    animation: 0.6s linear 0s infinite normal none running ${single};
  }

  .animation-load-button-double {
    animation: 0.6s linear 0s infinite normal none running ${double};
  }
`;
