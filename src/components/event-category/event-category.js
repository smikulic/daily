/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { cssColorGray, cssColorActionBackground } from "../../style/patterns";

const cssPositionRelative = css`
  position: relative;
`;
const cssFlexStart = css`
  display: flex;
  justify-content: flex-start;
`;
const cssEventTag = css`
  padding: 0 0.6rem;
  font-size: 0.75rem;
  color: ${cssColorGray};
  &:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${cssColorGray};
  }
`;

function EventCategory({
  name,
  client,
  themeColor,
  enableHover = false,
  onClick,
}) {
  return (
    <div
      css={css`
        ${cssFlexStart};
        font-size: 0.8rem;
      `}
      onClick={onClick}
    >
      <span
        css={css`
          ${cssFlexStart};
          padding: 0.1rem 0.3rem;
          border-radius: 0.2rem;
          white-space: nowrap;
          cursor: pointer;
          &:hover {
            background-color: ${enableHover
              ? cssColorActionBackground
              : "transparent"};
          }
        `}
      >
        <div css={cssPositionRelative}>
          <span
            css={css`
              ${cssEventTag}
              color: ${themeColor || cssColorGray}
            `}
          >
            {name}
          </span>
        </div>
        {client && (
          <div css={cssPositionRelative}>
            <span
              css={css`
                ${cssEventTag}
                &:before {
                  background-color: ${cssColorGray};
                }
              `}
            >
              {client}
            </span>
          </div>
        )}
      </span>
    </div>
  );
}

export default EventCategory;
