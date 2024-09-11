import React from "react";
import * as styles from "./recipe.css";
import useCardStore from "@/store/useCardStore";

function VanillaExtractRecipes() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <div className={styles.container}>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className={styles.cardConatainer} key={i}>
          Card {i}
          <div className={styles.item({ color: "red" })}>&#46;</div>
          <div className={styles.item({ color: "orange" })}>&#46;</div>
          <div className={styles.item({ color: "yellow" })}>&#46;</div>
          <div className={styles.item({ color: "green" })}>&#46;</div>
          <div className={styles.item({ color: "blue" })}>&#46;</div>
          <div className={styles.item({ color: "violet" })}>&#46;</div>
          <div className={styles.item({ color: "pink" })}>&#46;</div>
        </div>
      ))}
    </div>
  );
}

export default VanillaExtractRecipes;
