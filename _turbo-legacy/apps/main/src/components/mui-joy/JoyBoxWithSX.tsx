import Box from "@mui/material/Box";
import useCardStore from "@repo/zustand/useCardStore";
import React from "react";

const JoyBoxWithSXContainer = ({ children }: { children: React.ReactNode }) => (
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

const JoyBoxWithSXCardContainer = ({
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
const JoyBoxWithSXItemOne = () => (
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
const JoyBoxWithSXItemTwo = () => (
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
const JoyBoxWithSXItemThree = () => (
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
const JoyBoxWithSXItemFour = () => (
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
const JoyBoxWithSXItemFive = () => (
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
const JoyBoxWithSXItemSix = () => (
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
const JoyBoxWithSXItemSeven = () => (
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

function JoyBoxWithSX() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <JoyBoxWithSXContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <JoyBoxWithSXCardContainer key={i}>
          Card {i}
          <JoyBoxWithSXItemOne />
          <JoyBoxWithSXItemTwo />
          <JoyBoxWithSXItemThree />
          <JoyBoxWithSXItemFour />
          <JoyBoxWithSXItemFive />
          <JoyBoxWithSXItemSix />
          <JoyBoxWithSXItemSeven />
        </JoyBoxWithSXCardContainer>
      ))}
    </JoyBoxWithSXContainer>
  );
}

export default JoyBoxWithSX;
