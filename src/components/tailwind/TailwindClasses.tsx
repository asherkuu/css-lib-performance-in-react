import React from "react";
import useCardStore from "../../stores/useCardStore";

const TailwindContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-1 h-[56px] overflow-auto w-[120px] border-dashed border border-gray-400">
    {children}
  </div>
);

const TailwindCardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex mb-1 p-1 text-xs border-solid border border-gray-400">
    {children}
  </div>
);

const TailwindItemOne = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-red-500">&#46;</div>
);
const TailwindItemTwo = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-orange-500">&#46;</div>
);
const TailwindItemThree = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-yellow-500">&#46;</div>
);
const TailwindItemFour = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-green-500">&#46;</div>
);
const TailwindItemFive = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-blue-500">&#46;</div>
);
const TailwindItemSix = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-violet-500">&#46;</div>
);
const TailwindItemSeven = () => (
  <div className="w-[5px] h-[5px] ml-1 bg-pink-500">&#46;</div>
);

function TailwindClasses() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <TailwindContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <TailwindCardContainer key={i}>
          Card {i}
          <TailwindItemOne />
          <TailwindItemTwo />
          <TailwindItemThree />
          <TailwindItemFour />
          <TailwindItemFive />
          <TailwindItemSix />
          <TailwindItemSeven />
        </TailwindCardContainer>
      ))}
    </TailwindContainer>
  );
}

export default TailwindClasses;
