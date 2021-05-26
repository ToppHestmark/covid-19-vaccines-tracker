import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Progress = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  animation: p1 2s infinite;

  @keyframes p1 {
    0% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 0,
        #0000 0
      );
    }
    12.5% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 45deg,
        #0000 46deg
      );
    }
    25% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 90deg,
        #0000 91deg
      );
    }
    37.5% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 135deg,
        #0000 136deg
      );
    }
    50% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 180deg,
        #0000 181deg
      );
    }
    62.5% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 225deg,
        #0000 226deg
      );
    }
    75% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 270deg,
        #0000 271deg
      );
    }
    87.5% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 315deg,
        #0000 316deg
      );
    }
    100% {
      background: conic-gradient(
        ${(props) => props.theme.colors.primary} 360deg,
        #0000 360deg
      );
    }
  }
`;
