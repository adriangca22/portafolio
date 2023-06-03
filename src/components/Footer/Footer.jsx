import "./Footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Contáctame
        <a href="#info">
          <h2>
            <BsMouse /> - Scrollear hacia arriba -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a
          href="https://instagram.com/adrian_designerr33?igshid=MmJiY2I4NDBkZg=="
          target={"blank"}
        >
          <BsInstagram className="social" />
        </a>
        <a
          href="https://www.facebook.com/people/Adrian-Gonzalez/pfbid02o3tocCAoaFo8onahZZEZGGr5K4aegj4MaeMtsbBvy2Jjrug9VwcnvfHpoUgz2Gfzl/"
          target={"blank"}
        >
          <FaFacebookF className="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-gonzalez-6257aa204"
          target={"blank"}
        >
          <FaLinkedin className="social" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=%2B5804249070139&text&type=phone_number&app_absent=0"
          target={"blank"}
        >
          <FaWhatsapp className="social" />
        </a>
      </div>
    </div>
  );
};
