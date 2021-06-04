import { Container, Wrapper } from "./Layout.styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
