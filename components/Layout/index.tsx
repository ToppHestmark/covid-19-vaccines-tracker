import { Container, Wrapper } from "./Layout.styles";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
