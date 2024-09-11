import React from "react";
import Box from "@mui/material/Box";
import useCardStore from "@/store/useCardStore";

const MuiBoxWithPropsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    border="1px dashed #ccc"
    padding="4px"
    height="56px"
    overflow="auto"
    width="120px"
  >
    {children}
  </Box>
);

const MuiBoxWithPropsCardContainer = ({
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
const MuiBoxWithPropsItemOne = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "red",
    }}
  >
    &#46;
  </Box>
);
const MuiBoxWithPropsItemTwo = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "orange",
    }}
  >
    &#46;
  </Box>
);
const MuiBoxWithPropsItemThree = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "yellow",
    }}
  >
    &#46;
  </Box>
);
const MuiBoxWithPropsItemFour = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "green",
    }}
  >
    &#46;
  </Box>
);
const MuiBoxWithPropsItemFive = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "blue",
    }}
  >
    &#46;
  </Box>
);
const MuiBoxWithPropsItemSix = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "violet",
    }}
  >
    &#46;
  </Box>
);
const MuiBoxWithPropsItemSeven = () => (
  <Box
    width="5px"
    height="5px"
    marginLeft="5px"
    sx={{
      backgroundColor: "pink",
    }}
  >
    &#46;
  </Box>
);

function MuiBoxWithProps() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <MuiBoxWithPropsContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <MuiBoxWithPropsCardContainer key={i}>
          Card {i}
          <MuiBoxWithPropsItemOne />
          <MuiBoxWithPropsItemTwo />
          <MuiBoxWithPropsItemThree />
          <MuiBoxWithPropsItemFour />
          <MuiBoxWithPropsItemFive />
          <MuiBoxWithPropsItemSix />
          <MuiBoxWithPropsItemSeven />
        </MuiBoxWithPropsCardContainer>
      ))}
    </MuiBoxWithPropsContainer>
  );
}

export default MuiBoxWithProps;
