import React from "react";
import { Flex } from "antd";
import useCardStore from "@/store/useCardStore";

const AntdFlexContainer = ({ children }: { children: React.ReactNode }) => (
  <Flex
    vertical
    style={{
      border: "1px solid #ccc",
      padding: "4px",
      height: "56px",
      overflow: "auto",
      width: "120px",
    }}
  >
    {children}
  </Flex>
);
const AntdFlexCardContainer = ({ children }: { children: React.ReactNode }) => (
  <Flex
    style={{
      display: "flex",
      marginBottom: "4px",
      padding: "4px",
      border: "1px solid #ccc",
      fontSize: "12px",
    }}
  >
    {children}
  </Flex>
);
const AntdFlexItemOne = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "red",
    }}
  >
    &#46;
  </Flex>
);
const AntdFlexItemTwo = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "orange",
    }}
  >
    &#46;
  </Flex>
);
const AntdFlexItemThree = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "yellow",
    }}
  >
    &#46;
  </Flex>
);
const AntdFlexItemFour = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "green",
    }}
  >
    &#46;
  </Flex>
);
const AntdFlexItemFive = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "blue",
    }}
  >
    &#46;
  </Flex>
);
const AntdFlexItemSix = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "",
    }}
  >
    &#46;
  </Flex>
);
const AntdFlexItemSeven = () => (
  <Flex
    style={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "pink",
    }}
  >
    &#46;
  </Flex>
);

function AntdFlex() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <AntdFlexContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <AntdFlexCardContainer key={i}>
          Card {i}
          <AntdFlexItemOne />
          <AntdFlexItemTwo />
          <AntdFlexItemThree />
          <AntdFlexItemFour />
          <AntdFlexItemFive />
          <AntdFlexItemSix />
          <AntdFlexItemSeven />
        </AntdFlexCardContainer>
      ))}
    </AntdFlexContainer>
  );
}

export default AntdFlex;
