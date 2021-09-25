import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerStyles from "../css/header.module.css";

/**
 * @module Header
 */

/**
 * Header component
 * @return {JSX}
 */
const Header = () => (
  <header className={headerStyles.header}>
    <div>
      <h1 className={headerStyles.firstHeader}>Anime Memory Card Game</h1>
      <h2 className={headerStyles.secondHeader}>Improve your memory</h2>
    </div>
    <div className={headerStyles.icon}>
      <FontAwesomeIcon icon="brain" />
    </div>
  </header>
);

export default Header;
