/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderSubmit from "../header-submit";
import HeaderInput from "../header-input";

const cssHeaderWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.6rem;
  padding: 0 2em;
  background-color: #fff;
`;
const cssHeaderActions = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 20%;
`;

function HeaderWrapper({
  headerInputOnChange,
  headerInputPlaceholder,
  headerSubmitOnClick,
  children,
}) {
  return (
    <div css={cssHeaderWrapper}>
      <HeaderInput
        placeholder={headerInputPlaceholder}
        onChange={headerInputOnChange}
      />
      <div css={cssHeaderActions}>
        {children}
        <HeaderSubmit onClick={headerSubmitOnClick} />
      </div>
    </div>
  );
}

export default HeaderWrapper;
