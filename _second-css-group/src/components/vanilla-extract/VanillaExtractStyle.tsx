import React from "react";
import {
  container,
  // cardConatainer,
  // itemOne,
  // itemTwo,
  // itemThree,
  // itemFour,
  // itemFive,
  // itemSix,
  // itemSeven,
} from "../../styles/styles.css";
import useCardStore from "@repo/zustand/useCardStore";

function VanillaExtractStyle() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <div className={container}>
      {/* {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className={cardConatainer} key={i}>
          Card {i}
          <div className={itemOne}>&#46;</div>
          <div className={itemTwo}>&#46;</div>
          <div className={itemThree}>&#46;</div>
          <div className={itemFour}>&#46;</div>
          <div className={itemFive}>&#46;</div>
          <div className={itemSix}>&#46;</div>
          <div className={itemSeven}>&#46;</div>
        </div>
      ))} */}
    </div>
  );
}

export default VanillaExtractStyle;
