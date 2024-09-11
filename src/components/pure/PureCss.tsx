import React from "react";
import "./pure.css";
import useCardStore from "@/store/useCardStore";

const PureCssContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="container">{children}</div>
);

const PureCssCardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="card_container">{children}</div>
);
const PureCssItemOne = () => <div className="item_one">&#46;</div>;
const PureCssItemTwo = () => <div className="item_two">&#46;</div>;
const PureCssItemThree = () => <div className="item_three">&#46;</div>;
const PureCssItemFour = () => <div className="item_four">&#46;</div>;
const PureCssItemFive = () => <div className="item_five">&#46;</div>;
const PureCssItemSix = () => <div className="item_six">&#46;</div>;
const PureCssItemSeven = () => <div className="item_seven">&#46;</div>;

function PureCss() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <PureCssContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <PureCssCardContainer key={i}>
          Card {i}
          <PureCssItemOne />
          <PureCssItemTwo />
          <PureCssItemThree />
          <PureCssItemFour />
          <PureCssItemFive />
          <PureCssItemSix />
          <PureCssItemSeven />
        </PureCssCardContainer>
      ))}
    </PureCssContainer>
  );
}

export default PureCss;
