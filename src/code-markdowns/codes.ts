export const vanillaCssMd = `
~~~js
// style.css
.item {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
}

// item.js
import from './style';
const Item = () => <div className="item" />;
~~~
`;
export const vanillaCssModuleMd = `
~~~js
// style.module.css
.item {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
}

// item.js
import styles from './style.module.css';
const Item = () => <div className={style.item} />;
~~~
`;
export const scssMd = `
~~~js
// style.scss
.item {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
}

// item.js
import from './style';
const Item = () => <div className="item" />;
~~~
`;
export const scssModuleMd = `
~~~js
// style.module.scss
.item {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
}

// item.js
import styles from './style.module.scss';
const Item = () => <div className={style.item} />;
~~~
`;
export const styledMd = `
~~~js
// item.js
import { styled } from "styled-components";
const StyledItem = styled.div\`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
\`;

const Item = () => <StyledItem />;
~~~
`;
export const emotionMd = `
~~~js
// item.js
import { css } from "@emotion/react";
const item = css\`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
\`;

const Item = () => <div css={item} />;
~~~
`;
export const emotionStyledMd = `
~~~js
// item.js
import styled from "@emotion/styled";
const StyledItem = styled.div\`
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
\`;

const Item = () => <StyledItem />;
~~~
`;
export const emotionStyledFunctionMd = `
~~~js
// item.js
import styled from "@emotion/styled";
const StyledItem = styled.div({
  width: 5px;
  height: 5px;
  margin-left: 5px;
  background: red;
});

const Item = () => <StyledItem />;
~~~
`;
export const tailwindMd = `
~~~js
// item.js
const Item = () => <div className="w-[5px] h-[5px] ml-1 bg-red-500" />;
~~~
`;
export const vanillaExtractMd = `
~~~js
// item.css.ts
import { style } from "@vanilla-extract/css";
const item = style({
  width: 5,
  height: 5,
  marginLeft: 5,
  backgroundColor: "red",
});

// item.ts
import * as styles from "@/components/vanilla-extract/styles.css";
const Item = () => <div className={styles.item} />;
~~~
`;
export const vanillaExtractDynamicMd = `
~~~js
// item.css.ts
import { style } from "@vanilla-extract/css";
const item = style({
  width: 5,
  height: 5,
  marginLeft: 5,
});

// item.ts
import * as styles from "@/components/vanilla-extract/styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
const Item = () => <div className={styles.item} style={assignInlineVars({ backgroundColor: "red" })} />;
~~~
`;
export const vanillaExtractRecipesMd = `
~~~js
// item.css.ts
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
const item = recipe({
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

// item.ts
import * as styles from "@/components/vanilla-extract/styles.css";
const Item = () => <div className={styles.item({ color: 'red' })} />;
~~~
`;
