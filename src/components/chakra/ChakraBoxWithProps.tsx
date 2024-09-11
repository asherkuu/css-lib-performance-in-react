import React from "react";
import { Box } from "@chakra-ui/react";
import useCardStore from "@/store/useCardStore";

const ChakraBoxPropsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    border="1px dashed #ccc"
    padding="4px"
    overflow="auto"
    w="120px"
    h="56px"
  >
    {children}
  </Box>
);

const ChakraBoxPropsCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    display="flex"
    marginBottom="4px"
    padding="4px"
    border="1px solid #ccc"
    fontSize="12px"
  >
    {children}
  </Box>
);
const ChakraBoxPropsItemOne = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "red",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxPropsItemTwo = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "orange",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxPropsItemThree = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "yellow",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxPropsItemFour = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "green",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxPropsItemFive = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "blue",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxPropsItemSix = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "violet",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxPropsItemSeven = () => (
  <Box
    w="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "pink",
    }}
  >
    &#46;
  </Box>
);

function ChakraBoxProps() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <ChakraBoxPropsContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ChakraBoxPropsCardContainer key={i}>
          Card {i}
          <ChakraBoxPropsItemOne />
          <ChakraBoxPropsItemTwo />
          <ChakraBoxPropsItemThree />
          <ChakraBoxPropsItemFour />
          <ChakraBoxPropsItemFive />
          <ChakraBoxPropsItemSix />
          <ChakraBoxPropsItemSeven />
        </ChakraBoxPropsCardContainer>
      ))}
    </ChakraBoxPropsContainer>
  );
}

export default ChakraBoxProps;
