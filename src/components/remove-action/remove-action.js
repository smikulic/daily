/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cssColorRed, cssColorActionBackground } from "../../style/patterns";

function RemoveAction() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 0.6rem;
        border-radius: 0.5rem;
        color: transparent;
        cursor: pointer;

        &:hover {
          background-color: ${cssColorActionBackground};
          color: ${cssColorRed};
        }
      `}
    >
      Clear
    </div>
  );
}

export default RemoveAction;
