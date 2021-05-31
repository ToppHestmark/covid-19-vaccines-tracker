import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1.625em;
  padding: 1.25em 0em;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};

  ${(props) => props.theme.boxShadow}
`;

export const Header = styled.h3`
  text-align: center;
  font-weight: 400;
  margin-bottom: 1em;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(4, auto);
  }
`;

export const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.25em 1.625em;
`;

export const Quantity = styled.h4`
  font-size: 1.625rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};

  &.percent {
    color: ${(props) => props.theme.colors.success};
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.ghost};
  padding: 0 1.5em;
  margin: 0.625em 1.5em 0 1.5em;
`;
