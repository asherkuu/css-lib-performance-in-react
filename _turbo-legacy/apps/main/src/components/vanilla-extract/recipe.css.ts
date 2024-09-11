import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  border: "1px dashed #ccc",
  padding: 4,
  height: 56,
  overflow: "auto",
  width: 120,
});

export const cardConatainer = style({
  border: "1px solid #ccc",
  display: "flex",
  marginBottom: 4,
  padding: 4,
  fontSize: 12,
});

export const item = recipe({
  base: {
    width: "5px",
    height: "5px",
    marginLeft: "5px",
  },

  variants: {
    color: {
      red: { backgroundColor: "red" },
      orange: { backgroundColor: "orange" },
      yellow: { backgroundColor: "yellow" },
      green: { backgroundColor: "green" },
      blue: { backgroundColor: "blue" },
      violet: { backgroundColor: "violet" },
      pink: { backgroundColor: "pink" },
    },
  },
});
