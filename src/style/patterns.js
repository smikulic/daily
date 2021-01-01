/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cssColorPurple = "#2c1338";
export const cssColorPink = "#dd6fd1";
export const cssColorGray = "#817187";
export const cssColorRed = "#b32323";
export const cssColorActionBackground = "rgba(44, 19, 56, 0.1)";

export const cssFlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const cssListWrapper = css`
  ${cssFlexColumn};
  margin: 1rem 1.5rem;
  box-shadow: 0px 2px 6px -2px #f8f8f9;
  font-size: 0.8rem;
  background-color: #fff;
  color: ${cssColorPurple};
`;
