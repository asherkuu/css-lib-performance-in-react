import React from "react";
import "@/components/vanilla/vanilla.css";
import useCardStore from "@/store/useCardStore";

const VanillaCssContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="container">{children}</div>
);

const VanillaCssCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="card_container">{children}</div>;
const VanillaCssItemOne = () => <div className="item_one">&#46;</div>;
const VanillaCssItemTwo = () => <div className="item_two">&#46;</div>;
const VanillaCssItemThree = () => <div className="item_three">&#46;</div>;
const VanillaCssItemFour = () => <div className="item_four">&#46;</div>;
const VanillaCssItemFive = () => <div className="item_five">&#46;</div>;
const VanillaCssItemSix = () => <div className="item_six">&#46;</div>;
const VanillaCssItemSeven = () => <div className="item_seven">&#46;</div>;

function VanillaCss() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <VanillaCssContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <VanillaCssCardContainer key={i}>
          Card {i}
          <VanillaCssItemOne />
          <VanillaCssItemTwo />
          <VanillaCssItemThree />
          <VanillaCssItemFour />
          <VanillaCssItemFive />
          <VanillaCssItemSix />
          <VanillaCssItemSeven />
        </VanillaCssCardContainer>
      ))}
    </VanillaCssContainer>
  );
}

export default VanillaCss;
