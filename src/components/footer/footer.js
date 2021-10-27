import React from "react";
import {
  AiFillCodepenCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer class="footer">
      {/* <div></div> */}
      <div class="footer-links">
        <a
          href="https://www.linkedin.com/in/matthias-guilbert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            size={window.innerWidth > 600 ? "2.5rem" : "1rem"}
            color="#fff"
          />
        </a>
        <a
          href="https://github.com/GMLJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub
            size={window.innerWidth > 600 ? "2.5rem" : "1rem"}
            color="#fff"
          />
        </a>
        <a
          href="https://codepen.io/GMLJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillCodepenCircle
            size={window.innerWidth > 600 ? "2.5rem" : "1rem"}
            color="#fff"
          />
        </a>
        <a
          href="mailto:guilbertmatthias32@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CgMail
            size={window.innerWidth > 600 ? "2.5rem" : "1rem"}
            color="#fff"
          />
        </a>
      </div>
      <div class="footer-copyright">
        2021 &copy; Matthias Guilbert <br />
        <span>Artwork by Izzat Amanuel</span>
      </div>
    </footer>
  );
};

export default Footer;
