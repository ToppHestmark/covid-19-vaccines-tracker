import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
  transition: ${(props) => props.theme.transtition};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  a {
    opacity: 0.6;
    padding: 0.2em 0;
  }

  a:hover {
    opacity: 1;
  }
`;
