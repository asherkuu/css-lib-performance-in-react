import React from "react";
import styles from "./scss.module.scss";
import useCardStore from "@/store/useCardStore";

const ScssModuleContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);

const ScssModuleCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.card_container}>{children}</div>;
const ScssModuleItemOne = () => <div className={styles.item_one}>&#46;</div>;
const ScssModuleItemTwo = () => <div className={styles.item_two}>&#46;</div>;
const ScssModuleItemThree = () => (
  <div className={styles.item_three}>&#46;</div>
);
const ScssModuleItemFour = () => <div className={styles.item_four}>&#46;</div>;
const ScssModuleItemFive = () => <div className={styles.item_five}>&#46;</div>;
const ScssModuleItemSix = () => <div className={styles.item_six}>&#46;</div>;
const ScssModuleItemSeven = () => (
  <div className={styles.item_seven}>&#46;</div>
);

function ScssModule() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <ScssModuleContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ScssModuleCardContainer key={i}>
          Card {i}
          <ScssModuleItemOne />
          <ScssModuleItemTwo />
          <ScssModuleItemThree />
          <ScssModuleItemFour />
          <ScssModuleItemFive />
          <ScssModuleItemSix />
          <ScssModuleItemSeven />
        </ScssModuleCardContainer>
      ))}
    </ScssModuleContainer>
  );
}

export default ScssModule;
