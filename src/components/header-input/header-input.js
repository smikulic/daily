/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const cssHeaderInput = css`
  display: flex;
  flex-basis: 80%;
  font-size: 1rem;
  border: 0;
  outline: 0;
`;

function HeaderInput({ onChange, placeholder }) {
  return (
    <input
      css={cssHeaderInput}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
}

export default HeaderInput;
