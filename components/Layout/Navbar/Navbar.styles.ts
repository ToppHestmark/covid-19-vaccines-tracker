import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.light};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    margin: 0 1.625em;
  }
  @media screen and (max-width: 768px) {
    margin: 0 1em;
  }
`;

export const LogoWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;
