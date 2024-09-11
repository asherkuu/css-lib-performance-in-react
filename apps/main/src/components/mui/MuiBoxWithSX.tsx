import Box from "@mui/material/Box";
import useCardStore from "@repo/zustand/useCardStore";
import React from "react";

const MuiBoxContainer = ({ children }: { children: React.ReactNode }) => (
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

const MuiBoxCardContainer = ({ children }: { children: React.ReactNode }) => (
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
const MuiBoxItemOne = () => (
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
const MuiBoxItemTwo = () => (
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
const MuiBoxItemThree = () => (
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
const MuiBoxItemFour = () => (
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
const MuiBoxItemFive = () => (
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
const MuiBoxItemSix = () => (
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
const MuiBoxItemSeven = () => (
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

function MuiBoxWithSX() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <MuiBoxContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <MuiBoxCardContainer key={i}>
          Card {i}
          <MuiBoxItemOne />
          <MuiBoxItemTwo />
          <MuiBoxItemThree />
          <MuiBoxItemFour />
          <MuiBoxItemFive />
          <MuiBoxItemSix />
          <MuiBoxItemSeven />
        </MuiBoxCardContainer>
      ))}
    </MuiBoxContainer>
  );
}

export default MuiBoxWithSX;
