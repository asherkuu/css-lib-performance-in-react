import { Box } from "@chakra-ui/react";
import useCardStore from "@/store/useCardStore";
import React from "react";

const ChakraBoxContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      border: "1px dashed #ccc",
      padding: "4px",
      height: "56px",
      overflow: "auto",
      width: "120px",
    }}
  >
    {children}
  </Box>
);

const ChakraBoxCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    sx={{
      border: "1px solid #ccc",
      display: "flex",
      marginBottom: "4px",
      padding: "4px",
      fontSize: "12px",
    }}
  >
    {children}
  </Box>
);
const ChakraBoxItemOne = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "red",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxItemTwo = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "orange",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxItemThree = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "yellow",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxItemFour = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "green",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxItemFive = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "blue",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxItemSix = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "violet",
    }}
  >
    &#46;
  </Box>
);
const ChakraBoxItemSeven = () => (
  <Box
    sx={{
      width: "5px",
      height: "5px",
      marginLeft: "5px",
      backgroundColor: "pink",
    }}
  >
    &#46;
  </Box>
);

function ChakraBoxWithSX() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <ChakraBoxContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ChakraBoxCardContainer key={i}>
          Card {i}
          <ChakraBoxItemOne />
          <ChakraBoxItemTwo />
          <ChakraBoxItemThree />
          <ChakraBoxItemFour />
          <ChakraBoxItemFive />
          <ChakraBoxItemSix />
          <ChakraBoxItemSeven />
        </ChakraBoxCardContainer>
      ))}
    </ChakraBoxContainer>
  );
}

export default ChakraBoxWithSX;
