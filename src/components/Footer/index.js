import {
  FooterContainer,
  FooterWrapper,
  FooterCopy,
  WebDesigner,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterCopy>&copy; {new Date().getFullYear()}</FooterCopy>
        <WebDesigner>Designed & Developed by Adam Kahava</WebDesigner>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
