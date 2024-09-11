/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import styles from "./emotion.style";
import useCardStore from "@repo/zustand/useCardStore";

const EmotionCssContainer = ({ children }: { children: React.ReactNode }) => (
  <div css={styles.container}>{children}</div>
);

const EmotionCssCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div css={styles.card_container}>{children}</div>;
const EmotionCssItemOne = () => <div css={styles.item_one}>&#46;</div>;
const EmotionCssItemTwo = () => <div css={styles.item_two}>&#46;</div>;
const EmotionCssItemThree = () => <div css={styles.item_three}>&#46;</div>;
const EmotionCssItemFour = () => <div css={styles.item_four}>&#46;</div>;
const EmotionCssItemFive = () => <div css={styles.item_five}>&#46;</div>;
const EmotionCssItemSix = () => <div css={styles.item_six}>&#46;</div>;
const EmotionCssItemSeven = () => <div css={styles.item_seven}>&#46;</div>;

function EmotionCss() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <EmotionCssContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <EmotionCssCardContainer key={i}>
          Card {i}
          <EmotionCssItemOne />
          <EmotionCssItemTwo />
          <EmotionCssItemThree />
          <EmotionCssItemFour />
          <EmotionCssItemFive />
          <EmotionCssItemSix />
          <EmotionCssItemSeven />
        </EmotionCssCardContainer>
      ))}
    </EmotionCssContainer>
  );
}

export default EmotionCss;
