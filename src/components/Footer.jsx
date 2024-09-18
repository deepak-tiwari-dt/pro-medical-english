import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 50px;
  text-align: center;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  color: white;
  scroll-behavior: smooth;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 ProMedicalEnglish. All Rights Reserved.</p>
      <p>Contact Us: contact@promedicalenglish.com</p>
    </FooterContainer>
  );
};

export default Footer;
