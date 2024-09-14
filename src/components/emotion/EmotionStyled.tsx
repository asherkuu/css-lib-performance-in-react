"use client";

import React from "react";
import Styled from "@/components/emotion/emotion.styled";
import useCardStore from "@/store/useCardStore";

const EmotionStyledContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Styled.Container>{children}</Styled.Container>;

const EmotionStyledCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Styled.CardContainer>{children}</Styled.CardContainer>;
const EmotionStyledItemOne = () => <Styled.ItemOne>&#46;</Styled.ItemOne>;
const EmotionStyledItemTwo = () => <Styled.ItemTwo>&#46;</Styled.ItemTwo>;
const EmotionStyledItemThree = () => <Styled.ItemThree>&#46;</Styled.ItemThree>;
const EmotionStyledItemFour = () => <Styled.ItemFour>&#46;</Styled.ItemFour>;
const EmotionStyledItemFive = () => <Styled.ItemFive>&#46;</Styled.ItemFive>;
const EmotionStyledItemSix = () => <Styled.ItemSix>&#46;</Styled.ItemSix>;
const EmotionStyledItemSeven = () => <Styled.ItemSeven>&#46;</Styled.ItemSeven>;

function EmotionStyled() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <EmotionStyledContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <EmotionStyledCardContainer key={i}>
          Card {i}
          <EmotionStyledItemOne />
          <EmotionStyledItemTwo />
          <EmotionStyledItemThree />
          <EmotionStyledItemFour />
          <EmotionStyledItemFive />
          <EmotionStyledItemSix />
          <EmotionStyledItemSeven />
        </EmotionStyledCardContainer>
      ))}
    </EmotionStyledContainer>
  );
}

export default EmotionStyled;
