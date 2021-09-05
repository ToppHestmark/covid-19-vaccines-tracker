import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: auto;
  padding: 1em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
  transition: ${(props) => props.theme.transtition};
  position: sticky;
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

export const FooterText = styled.div`
  padding: 1em 0;
`;
