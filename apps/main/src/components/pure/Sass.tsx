import React from "react";
import styles from "./sass.module.scss";
import useCardStore from "@repo/zustand/useCardStore";

const SassContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

const SassCardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.card_container}>{children}</div>
);
const SassItemOne = () => <div className={styles.item_one}>&#46;</div>;
const SassItemTwo = () => <div className={styles.item_two}>&#46;</div>;
const SassItemThree = () => <div className={styles.item_three}>&#46;</div>;
const SassItemFour = () => <div className={styles.item_four}>&#46;</div>;
const SassItemFive = () => <div className={styles.item_five}>&#46;</div>;
const SassItemSix = () => <div className={styles.item_six}>&#46;</div>;
const SassItemSeven = () => <div className={styles.item_seven}>&#46;</div>;

function Sass() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <SassContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <SassCardContainer key={i}>
          Card {i}
          <SassItemOne />
          <SassItemTwo />
          <SassItemThree />
          <SassItemFour />
          <SassItemFive />
          <SassItemSix />
          <SassItemSeven />
        </SassCardContainer>
      ))}
    </SassContainer>
  );
}

export default Sass;
