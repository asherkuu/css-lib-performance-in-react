import styled from "@emotion/styled";

const Container = styled("div")({
  border: "1px dashed #ccc",
  padding: "4px",
  height: "56px",
  overflow: "auto",
  width: "120px",
});

const CardContainer = styled("div")({
  border: "1px solid #ccc",
  display: "flex",
  marginBottom: "4px",
  padding: "4px",
  fontSize: "12px",
});

const ItemOne = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "red",
});

const ItemTwo = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "orange",
});

const ItemThree = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "yellow",
});
const ItemFour = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "green",
});

const ItemFive = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "blue",
});
const ItemSix = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "violet",
});
const ItemSeven = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  backgroundColor: "pink",
});

const styles = {
  Container,
  CardContainer,
  ItemOne,
  ItemTwo,
  ItemThree,
  ItemFour,
  ItemFive,
  ItemSix,
  ItemSeven,
};

export default styles;
