import { Container, HeadText } from "./Header.styles";

interface HeaderProps {
  children: string | object;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Container>
      {" "}
      <HeadText> {children} </HeadText>{" "}
    </Container>
  );
};

export default Header;
