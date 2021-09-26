import React from "react";
import PropTypes from "prop-types";
import styles from "../css/card.module.css";

/**
 * @module Card
 */

/**
 * Caed component
 * @param {Obj} param0 - Props
 * @param {String} param0.src - Image screen
 * @param {String} param0.caption - Figure caption
 * @param {Function} param0.onClick - on click handler
 * @param {Number} param0.index - index of card
 * @param {Function} param0.onKeyDown - on key down handler
 * @return {JSX}
 */
const Card = ({ src, caption, onClick, index, onKeyDown }) => (
  <div
    className={styles.card}
    id={caption}
    onClick={onClick}
    role="button"
    tabIndex={index}
    onKeyDown={onKeyDown}
  >
    <figure>
      <img src={src} alt="" className={styles.img} />
      <figcaption>{caption}</figcaption>
    </figure>
  </div>
);

Card.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Card;
