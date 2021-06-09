import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 2em;
`;

export const LabelWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalSquare = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 0.3em;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
`;

export const FullySquare = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 0.3em 0 1.625em;
  opacity: 0.8;
  background: ${(props) => props.theme.colors.success};
  border-radius: 50%;
`;

export const Label = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.ghost};
`;
