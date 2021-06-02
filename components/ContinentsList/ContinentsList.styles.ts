import styled from "styled-components";

export const Container = styled.section`
  width: 100% auto;
  background: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 1em;
  border: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, auto);
    justify-content: space-evenly;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, auto);
  }
`;

export const Card = styled.div`
  min-width: 300px;
  min-height: 110px;
  padding: 2em 1em;
  margin: 0 1em;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: space-between;
  align-content: space-between;
  border-bottom: 0.2px solid ${(props) => props.theme.colors.gray};

  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    border-bottom: 0;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0;

    &:nth-child(4) {
      border-bottom: 0.2px solid ${(props) => props.theme.colors.gray};
    }
    &:nth-child(5),
    &:nth-child(6) {
      border-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 100px;
    min-width: 300px;
    padding: 2em 1.6em;
  }

  @media screen and (max-width: 568px) {
    min-width: 90vw;
    padding: 2em 0;
    margin: 0;
    border-bottom: 0.2px solid ${(props) => props.theme.colors.gray};

    &:nth-child(5) {
      border-bottom: 0.2px solid ${(props) => props.theme.colors.gray};
    }
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
  font-weight: 300;
  color: ${(props) => props.theme.colors.ghost};
`;

export const Daily = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  text-align: end;
  color: ${(props) => props.theme.colors.ghost};
`;
