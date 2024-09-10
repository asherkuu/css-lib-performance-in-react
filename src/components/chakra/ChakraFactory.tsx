import React from "react";
import { chakra } from "@chakra-ui/react";
import useCardStore from "../../stores/useCardStore";

const ChakraFactoryContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <chakra.div
    border="1px dashed #ccc"
    padding="4px"
    overflow="auto"
    w="120px"
    h="56px"
  >
    {children}
  </chakra.div>
);

const ChakraFactoryCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <chakra.div
    display="flex"
    marginBottom="4px"
    padding="4px"
    border="1px solid #ccc"
    fontSize="12px"
  >
    {children}
  </chakra.div>
);
const ChakraFactoryItemOne = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "red",
    }}
  >
    &#46;
  </chakra.div>
);
const ChakraFactoryItemTwo = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "orange",
    }}
  >
    &#46;
  </chakra.div>
);
const ChakraFactoryItemThree = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "yellow",
    }}
  >
    &#46;
  </chakra.div>
);
const ChakraFactoryItemFour = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "green",
    }}
  >
    &#46;
  </chakra.div>
);
const ChakraFactoryItemFive = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "blue",
    }}
  >
    &#46;
  </chakra.div>
);
const ChakraFactoryItemSix = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "violet",
    }}
  >
    &#46;
  </chakra.div>
);
const ChakraFactoryItemSeven = () => (
  <chakra.div
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "pink",
    }}
  >
    &#46;
  </chakra.div>
);

function ChakraFactory() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <ChakraFactoryContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ChakraFactoryCardContainer key={i}>
          Card {i}
          <ChakraFactoryItemOne />
          <ChakraFactoryItemTwo />
          <ChakraFactoryItemThree />
          <ChakraFactoryItemFour />
          <ChakraFactoryItemFive />
          <ChakraFactoryItemSix />
          <ChakraFactoryItemSeven />
        </ChakraFactoryCardContainer>
      ))}
    </ChakraFactoryContainer>
  );
}

export default ChakraFactory;
