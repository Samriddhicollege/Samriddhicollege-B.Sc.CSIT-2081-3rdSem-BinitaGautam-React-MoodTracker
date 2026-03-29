import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/binita.gautam.639270/" target="blank">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/binita_gautam_/" target="blank">
        <FaInstagram />{" "}
      </a>
      <a href="https://github.com/BinitaGautam011" target="blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/binita--gautam-/" target="blank">
        <FaLinkedin />
      </a>
      <p>©️ {new Date().getFullYear()} CopyRight : Done by Binita Gautam </p>
    </footer>
  );
};
export default Footer;
