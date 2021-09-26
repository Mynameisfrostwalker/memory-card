import React, { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import styles from "../css/main.module.css";
import tanjiro from "../assets/Tanjiro.jpeg";
import deku from "../assets/Deku.jpeg";
import emma from "../assets/Emma.webp";
import itadori from "../assets/Itadori.jpeg";
import L from "../assets/L.webp";
import meliodas from "../assets/Meliodas.jpg";
import saitama from "../assets/Saitama.png";
import yumeko from "../assets/Yumeko.jpg";

/**
 * @module Main
 */

/**
 * Main component
 * @return {JSX}
 */
const Main = () => {
  const [cardInfo, setCardInfo] = useState([
    [tanjiro, "Tanjiro", false, uniqid()],
    [deku, "Deku", false, uniqid()],
    [emma, "Emma", false, uniqid()],
    [itadori, "Itadori", false, uniqid()],
    [L, "L", false, uniqid()],
    [meliodas, "Meliodas", false, uniqid()],
    [saitama, "Saitama", false, uniqid()],
    [yumeko, "Yumeko", false, uniqid()],
  ]);

  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    const clone = [...cardInfo];
    const value = clone.every((card) => card[2] === true);
    let index;
    if (value) {
      for (let i = 0; i < clone.length; i += 1) {
        clone[i][2] = false;
      }
    }

    const cardIndex = e.currentTarget.id;

    let select = true;

    for (let i = 0; i < clone.length; i += 1) {
      if (clone[i][1] === cardIndex) {
        index = i;
      }
    }

    if (clone[index][2] === true) {
      select = false;
      for (let y = 0; y < clone.length; y += 1) {
        clone[y][2] = false;
      }
    }

    clone[index][2] = true;

    if (!value) {
      let currentIndex = clone.length;

      while (currentIndex > 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        [clone[currentIndex], clone[randomIndex]] = [
          clone[randomIndex],
          clone[currentIndex],
        ];
      }
    }
    setCardInfo(clone);
    setScore(select ? score + 1 : 0);
  };

  const handleKeyDown = () => {};

  const displayCards = (card, index) => (
    <Card
      src={card[0]}
      caption={card[1]}
      key={card[3]}
      onClick={handleClick}
      index={index}
      onKeyDown={handleKeyDown}
    />
  );

  return (
    <main>
      <Scoreboard score={score} />
      <section className={styles.grid}>
        {cardInfo.map((card, index) => displayCards(card, index))}
      </section>
    </main>
  );
};

export default Main;
