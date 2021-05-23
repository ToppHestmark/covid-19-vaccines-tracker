import { Main } from "./Layout.styles";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <Main>
      {" "}
      {children}
      <Footer />
    </Main>
  );
};

export default Layout;
