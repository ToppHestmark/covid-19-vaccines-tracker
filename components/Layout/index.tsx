import { Container, Wrapper } from "./Layout.styles";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
