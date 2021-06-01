import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  margin: 0.625em 0;
`;

export const HeadText = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2.125rem;
  }
`;
