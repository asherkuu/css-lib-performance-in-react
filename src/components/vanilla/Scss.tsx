import React from "react";
import "./scss.scss";
import useCardStore from "@/store/useCardStore";

const ScssContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="container">{children}</div>
);

const ScssCardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="card_container">{children}</div>
);
const ScssItemOne = () => <div className="item_one">&#46;</div>;
const ScssItemTwo = () => <div className="item_two">&#46;</div>;
const ScssItemThree = () => <div className="item_three">&#46;</div>;
const ScssItemFour = () => <div className="item_four">&#46;</div>;
const ScssItemFive = () => <div className="item_five">&#46;</div>;
const ScssItemSix = () => <div className="item_six">&#46;</div>;
const ScssItemSeven = () => <div className="item_seven">&#46;</div>;

function Scss() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <ScssContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ScssCardContainer key={i}>
          Card {i}
          <ScssItemOne />
          <ScssItemTwo />
          <ScssItemThree />
          <ScssItemFour />
          <ScssItemFive />
          <ScssItemSix />
          <ScssItemSeven />
        </ScssCardContainer>
      ))}
    </ScssContainer>
  );
}

export default Scss;
