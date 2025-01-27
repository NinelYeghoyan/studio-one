import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const StyledSkeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.gray03};
  background-image: linear-gradient(
    90deg,
    ${(p) => p.theme.palette.gray03} 0%,
    ${(p) => p.theme.palette.gray04} 20%,
    ${(p) => p.theme.palette.gray05} 40%,
    ${(p) => p.theme.palette.gray04} 60%,
    ${(p) => p.theme.palette.gray03} 80%
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  opacity: 0.7;
`;

export default StyledSkeleton;
