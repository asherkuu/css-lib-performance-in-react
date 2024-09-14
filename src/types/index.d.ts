declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

/** @jsxImportSource @emotion/react */
import { Interpolation } from "@emotion/react";

// JSX 인타페이스 확장
declare module "react" {
  // React의 기존 요소에 css prop 추가
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: Interpolation;
  }
}
