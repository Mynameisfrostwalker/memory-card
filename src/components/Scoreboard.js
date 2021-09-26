import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../css/scoreboard.module.css";

/**
 * @module Scoreboard
 */

/**
 * Scoreboard component
 * @param {Obj} param0 -Props
 * @param {Number} param0.score - Score
 * @return {JSX}
 */

const Scoreboard = ({ score }) => {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <aside className={styles.aside}>
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </aside>
  );
};

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Scoreboard;
