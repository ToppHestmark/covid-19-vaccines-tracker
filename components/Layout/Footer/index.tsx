import { FooterContainer, FooterText } from "./Footer.styles";

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
    <FooterText>
      <span>
        <strong>Note: </strong>
      </span>
      <span>
        This project contain chart bug issue and cache issue from hosting
        provider.
      </span>
    </FooterText>
  </FooterContainer>
);

export default Footer;
