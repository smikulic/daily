/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { cssColorPink } from "../../style/patterns";

const cssHeaderSubmit = css`
  z-index: 2;
  color: ${cssColorPink};
  cursor: pointer;
`;

function HeaderSubmit({ onClick }) {
  return (
    <div css={cssHeaderSubmit} onClick={onClick}>
      <FontAwesomeIcon icon={faCheckCircle} size="2x" />
    </div>
  );
}

export default HeaderSubmit;
