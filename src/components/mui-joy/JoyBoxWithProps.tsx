import Box from "@mui/material/Box";
import useCardStore from "@/store/useCardStore";
import React from "react";

const JoyBoxWithPropsContainer = ({
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

const JoyBoxWithPropsCardContainer = ({
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
const JoyBoxWithPropsItemOne = () => (
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
const JoyBoxWithPropsItemTwo = () => (
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
const JoyBoxWithPropsItemThree = () => (
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
const JoyBoxWithPropsItemFour = () => (
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
const JoyBoxWithPropsItemFive = () => (
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
const JoyBoxWithPropsItemSix = () => (
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
const JoyBoxWithPropsItemSeven = () => (
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

function JoyBoxWithProps() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <JoyBoxWithPropsContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <JoyBoxWithPropsCardContainer key={i}>
          Card {i}
          <JoyBoxWithPropsItemOne />
          <JoyBoxWithPropsItemTwo />
          <JoyBoxWithPropsItemThree />
          <JoyBoxWithPropsItemFour />
          <JoyBoxWithPropsItemFive />
          <JoyBoxWithPropsItemSix />
          <JoyBoxWithPropsItemSeven />
        </JoyBoxWithPropsCardContainer>
      ))}
    </JoyBoxWithPropsContainer>
  );
}

export default JoyBoxWithProps;
