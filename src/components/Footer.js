import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerStyle from "../css/footer.module.css";

/**
 * @module Footer
 */

/**
 * Footer component
 * @return {JSX}
 */
const Footer = () => (
  <footer className={footerStyle.footer}>
    Created by Frostwalker
    <a
      href="https://github.com/Mynameisfrostwalker/memory-card"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={["fab", "github"]} />
    </a>
  </footer>
);

export default Footer;
