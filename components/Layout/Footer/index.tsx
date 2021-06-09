import { FooterContainer } from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <a
      href="https://github.com/owid/covid-19-data"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Source by: </span> <span>ourworldindata.org</span>
    </a>
    <a
      href="https://github.com/ToppHestmark/covid-19-vaccines-tracker"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Github: </span> <span>Topp Hestmark</span>
    </a>
  </FooterContainer>
);

export default Footer;
