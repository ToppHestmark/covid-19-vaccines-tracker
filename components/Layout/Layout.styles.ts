import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
  max-width: 1200px;

  @media screen and (max-width: 1100px) {
    padding: 0 1.625em;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1em;
  }
`;
