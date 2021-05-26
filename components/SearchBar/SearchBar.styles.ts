import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  margin: 1em 0;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 0.3em 1.2em;
    width: 280px;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 0.4em 1em;
  outline: 0;
  font-size: large;
  border-radius: ${(props) => props.theme.borderRadius};
  background: transparent;

  &:focus {
    ${(props) => props.theme.boxShadow};
  }

  @media screen and (max-width: 1100px) {
    margin: 0em 1em;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
