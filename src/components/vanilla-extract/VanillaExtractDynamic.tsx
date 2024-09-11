import React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "@/components/vanilla-extract/styles.css";
import useCardStore from "@/store/useCardStore";

function VanillaExtractDynamic() {
  const { numCards: NUM_CARDS, bgColors } = useCardStore();

  return (
    <div className={styles.container}>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className={styles.cardConatainer} key={i}>
          Card {i}
          <div
            className={styles.itemOne}
            style={assignInlineVars({ backgroundColor: bgColors[0] })}
          >
            &#46;
          </div>
          <div
            className={styles.itemTwo}
            style={assignInlineVars({ backgroundColor: bgColors[1] })}
          >
            &#46;
          </div>
          <div
            className={styles.itemThree}
            style={assignInlineVars({ backgroundColor: bgColors[2] })}
          >
            &#46;
          </div>
          <div
            className={styles.itemFour}
            style={assignInlineVars({ backgroundColor: bgColors[3] })}
          >
            &#46;
          </div>
          <div
            className={styles.itemFive}
            style={assignInlineVars({ backgroundColor: bgColors[4] })}
          >
            &#46;
          </div>
          <div
            className={styles.itemSix}
            style={assignInlineVars({ backgroundColor: bgColors[5] })}
          >
            &#46;
          </div>
          <div
            className={styles.itemSeven}
            style={assignInlineVars({ backgroundColor: bgColors[6] })}
          >
            &#46;
          </div>
        </div>
      ))}
    </div>
  );
}

export default VanillaExtractDynamic;
