import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-content: space-between;
  background: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 1em 0;

  ${(props) => props.theme.boxShadow};

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, auto);
    justify-content: space-evenly;
  }

  @media screen and (max-width: 568px) {
    width: 100vw;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, auto);
  }
`;

export const Card = styled.div`
  min-width: 300px;
  min-height: 130px;
  padding: 2em 1em;
  margin: 0 1em;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: space-between;
  align-content: space-between;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    min-height: 100px;
  }

  @media screen and (max-width: 568px) {
    min-width: 320px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
`;
export const Total = styled.p`
  text-align: end;
  font-weight: 500;
  color: ${(props) => props.theme.colors.success};
`;
export const Fully = styled.p`
  font-size: 0.75rem;
  opacity: 0.5;
`;

export const Daily = styled.p`
  font-size: 0.75rem;
  opacity: 0.5;
  text-align: end;
`;
