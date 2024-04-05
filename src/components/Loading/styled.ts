import styled from "styled-components";
import { keyframes } from "styled-components";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 0.6s linear infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;