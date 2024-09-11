import React from "react";
import styles from "@/components/vanilla/vanilla.module.css";
import useCardStore from "@/store/useCardStore";

const VanillaModuleContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.container}>{children}</div>;

const VanillaModuleCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.card_container}>{children}</div>;
const VanillaModuleItemOne = () => <div className={styles.item_one}>&#46;</div>;
const VanillaModuleItemTwo = () => <div className={styles.item_two}>&#46;</div>;
const VanillaModuleItemThree = () => (
  <div className={styles.item_three}>&#46;</div>
);
const VanillaModuleItemFour = () => (
  <div className={styles.item_four}>&#46;</div>
);
const VanillaModuleItemFive = () => (
  <div className={styles.item_five}>&#46;</div>
);
const VanillaModuleItemSix = () => <div className={styles.item_six}>&#46;</div>;
const VanillaModuleItemSeven = () => (
  <div className={styles.item_seven}>&#46;</div>
);

function VanillaModule() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <VanillaModuleContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <VanillaModuleCardContainer key={i}>
          Card {i}
          <VanillaModuleItemOne />
          <VanillaModuleItemTwo />
          <VanillaModuleItemThree />
          <VanillaModuleItemFour />
          <VanillaModuleItemFive />
          <VanillaModuleItemSix />
          <VanillaModuleItemSeven />
        </VanillaModuleCardContainer>
      ))}
    </VanillaModuleContainer>
  );
}

export default VanillaModule;
