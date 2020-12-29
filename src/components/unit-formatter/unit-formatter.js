/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cssColorGray } from "../../style/patterns";

function UnitFormatter({ children }) {
  return (
    <span
      css={css`
        margin-left: 0.25rem;
        color: ${cssColorGray};
      `}
    >
      {children}
    </span>
  );
}

export default UnitFormatter;
