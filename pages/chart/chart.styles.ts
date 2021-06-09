import styled from "styled-components";

export const Description = styled.p`
  width: 100%;
  text-align: center;
  padding: 1em;
  font-weight: 200;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.ghost};
`;
