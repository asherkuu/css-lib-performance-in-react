import { styled } from "@mui/joy";
import useCardStore from "@/store/useCardStore";

const StyledContainer = styled("div")`
  border: 1px dashed #ccc;
  padding: 4px;
  height: 56px;
  overflow: auto;
  width: 120px;
`;

const StyledCardContainer = styled("div")`
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 4px;
  padding: 4px;
  font-size: 12px;
`;

const StyledItemOne = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
`;

const StyledItemTwo = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: orange;
`;

const StyledItemThree = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: yellow;
`;

const StyledItemFour = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: green;
`;

const StyledItemFive = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: blue;
`;

const StyledItemSix = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: violet;
`;

const StyledItemSeven = styled("div")`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: pink;
`;

function MuiJoyStyled() {
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

export default MuiJoyStyled;
