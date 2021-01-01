/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cssColorActionBackground } from "../../style/patterns";

const cssLoadSpinner = css`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  & div {
    display: inline-block;
    position: absolute;
    left: 4px;
    width: 8px;
    background: ${cssColorActionBackground};
    animation: load-spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 4px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 16px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 28px;
    animation-delay: 0;
  }
  @keyframes load-spinner {
    0% {
      top: 4px;
      height: 32px;
    }
    50%,
    100% {
      top: 12px;
      height: 16px;
    }
  }
`;

function LoadSpinner() {
  return (
    <div css={cssLoadSpinner}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadSpinner;
