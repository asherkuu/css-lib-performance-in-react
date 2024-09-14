"use client";

import React from "react";
import Styled from "@/components/emotion/emotion-function.styled";
import useCardStore from "@/store/useCardStore";

const EmotionStyledFunctionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Styled.Container>{children}</Styled.Container>;

const EmotionStyledFunctionCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Styled.CardContainer>{children}</Styled.CardContainer>;
const EmotionStyledFunctionItemOne = () => (
  <Styled.ItemOne>&#46;</Styled.ItemOne>
);
const EmotionStyledFunctionItemTwo = () => (
  <Styled.ItemTwo>&#46;</Styled.ItemTwo>
);
const EmotionStyledFunctionItemThree = () => (
  <Styled.ItemThree>&#46;</Styled.ItemThree>
);
const EmotionStyledFunctionItemFour = () => (
  <Styled.ItemFour>&#46;</Styled.ItemFour>
);
const EmotionStyledFunctionItemFive = () => (
  <Styled.ItemFive>&#46;</Styled.ItemFive>
);
const EmotionStyledFunctionItemSix = () => (
  <Styled.ItemSix>&#46;</Styled.ItemSix>
);
const EmotionStyledFunctionItemSeven = () => (
  <Styled.ItemSeven>&#46;</Styled.ItemSeven>
);

function EmotionStyledFunction() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <EmotionStyledFunctionContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <EmotionStyledFunctionCardContainer key={i}>
          Card {i}
          <EmotionStyledFunctionItemOne />
          <EmotionStyledFunctionItemTwo />
          <EmotionStyledFunctionItemThree />
          <EmotionStyledFunctionItemFour />
          <EmotionStyledFunctionItemFive />
          <EmotionStyledFunctionItemSix />
          <EmotionStyledFunctionItemSeven />
        </EmotionStyledFunctionCardContainer>
      ))}
    </EmotionStyledFunctionContainer>
  );
}

export default EmotionStyledFunction;
