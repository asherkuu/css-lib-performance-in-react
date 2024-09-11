import React from "react";
import * as styles from "./styles.css";
import useCardStore from "@repo/zustand/useCardStore";

function VanillaExtractStyle() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <div className={styles.container}>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className={styles.cardConatainer} key={i}>
          Card {i}
          <div className={styles.itemOne}>&#46;</div>
          <div className={styles.itemTwo}>&#46;</div>
          <div className={styles.itemThree}>&#46;</div>
          <div className={styles.itemFour}>&#46;</div>
          <div className={styles.itemFive}>&#46;</div>
          <div className={styles.itemSix}>&#46;</div>
          <div className={styles.itemSeven}>&#46;</div>
        </div>
      ))}
    </div>
  );
}

export default VanillaExtractStyle;
