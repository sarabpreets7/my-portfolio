/* using styled-components */
import styled, { keyframes } from 'styled-components';

const raining = keyframes`
  from {
    transform: translateY(-1200px);
  }
  to {
    transform: translateY(869px);
  }
`;

export const Rain = styled.div`
  position: absolute;
  width: 1rem;
  height: 10rem;
  background: #ffffff;
  border-radius: 20%;
  opacity: 0.2;
  z-index: -1;
  animation: ${raining} 2s linear infinite both;
`;

export const Drop = styled.div`
  width: 1rem;
  height: 7rem;
  background: #ffffff;
  position: absolute;
  border-radius: 20%;
  opacity: 0.2;
  animation: ${raining} 4s linear infinite both;
`;
