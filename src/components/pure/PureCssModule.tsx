import React from "react";
import styles from "./pure.module.css";
import useCardStore from "@/store/useCardStore";

const PureCssModuleContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.container}>{children}</div>;

const PureCssModuleCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.card_container}>{children}</div>;
const PureCssModuleItemOne = () => <div className={styles.item_one}>&#46;</div>;
const PureCssModuleItemTwo = () => <div className={styles.item_two}>&#46;</div>;
const PureCssModuleItemThree = () => (
  <div className={styles.item_three}>&#46;</div>
);
const PureCssModuleItemFour = () => (
  <div className={styles.item_four}>&#46;</div>
);
const PureCssModuleItemFive = () => (
  <div className={styles.item_five}>&#46;</div>
);
const PureCssModuleItemSix = () => <div className={styles.item_six}>&#46;</div>;
const PureCssModuleItemSeven = () => (
  <div className={styles.item_seven}>&#46;</div>
);

function PureCssModule() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <PureCssModuleContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <PureCssModuleCardContainer key={i}>
          Card {i}
          <PureCssModuleItemOne />
          <PureCssModuleItemTwo />
          <PureCssModuleItemThree />
          <PureCssModuleItemFour />
          <PureCssModuleItemFive />
          <PureCssModuleItemSix />
          <PureCssModuleItemSeven />
        </PureCssModuleCardContainer>
      ))}
    </PureCssModuleContainer>
  );
}

export default PureCssModule;
