import Image from "next/image";
import Link from "next/link";
import { NavContainer, InnerWrapper, LogoWrapper } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <InnerWrapper>
        <LogoWrapper>
          <Link href="/">
            <a>
              <Image
                className="image"
                src="/logo.png"
                alt="Logo"
                width={450}
                height={200}
              />
            </a>
          </Link>
        </LogoWrapper>
      </InnerWrapper>
    </NavContainer>
  );
};

export default Navbar;
