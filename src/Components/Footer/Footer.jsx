import { FooterContainer } from "./Footer.style"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h3>Wallywood</h3>
        <br />
        <p>Øster Uttrupvej 1 </p>
        <p>9000 Aalborg</p>
        <p>Danmark</p>
      </div>

      <div>
        <h3>CVR</h3>
        <p>MAIL:info@plakatshoppen.dk</p>
        <p>MOBIL: +454 9812 3456</p>
      </div>

      <div className="social-media">
        <h3>Sociale medier</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon facebook" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon twitter" />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};