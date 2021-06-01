import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 99vw;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.light};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1040px;

  @media screen and (max-width: 1100px) {
    margin: 0 1.625em;
  }
  @media screen and (max-width: 768px) {
    margin: 0 1em;
  }
`;
