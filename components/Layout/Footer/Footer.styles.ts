import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
  transition: ${(props) => props.theme.transtition};
  opacity: 0.6;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &:hover {
    opacity: 1;
  }
`;
