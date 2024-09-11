import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import useCardStore from "@repo/zustand/useCardStore";

const StyledContainer = styled(Box)({
  border: "1px dashed #ccc",
  padding: 4,
  height: 56,
  overflow: "auto",
  width: 120,
});

const StyledCardContainer = styled(Box)({
  border: "1px solid #ccc",
  display: "flex",
  marginBottom: 4,
  padding: 4,
  fontSize: 12,
});

const StyledItemOne = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "red",
});

const StyledItemTwo = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "orange",
});

const StyledItemThree = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "yellow",
});

const StyledItemFour = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "green",
});

const StyledItemFive = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "blue",
});

const StyledItemSix = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "violet",
});

const StyledItemSeven = styled(Box)({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "pink",
});

function MuiBoxWithStyledTheme() {
  const { numCards: NUM_CARDS } = useCardStore();

  return (
    <StyledContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <StyledCardContainer key={i}>
          Card {i}
          <StyledItemOne>&#46;</StyledItemOne>
          <StyledItemTwo>&#46;</StyledItemTwo>
          <StyledItemThree>&#46;</StyledItemThree>
          <StyledItemFour>&#46;</StyledItemFour>
          <StyledItemFive>&#46;</StyledItemFive>
          <StyledItemSix>&#46;</StyledItemSix>
          <StyledItemSeven>&#46;</StyledItemSeven>
        </StyledCardContainer>
      ))}
    </StyledContainer>
  );
}

export default MuiBoxWithStyledTheme;
