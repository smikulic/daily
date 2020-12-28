/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import RemoveAction from "../../components/remove-action";

const cssTableWrapper = css`
  display: grid;
  grid-template-columns: 12fr 2fr 2fr 1fr;
`;

const cssCell = css`
  padding: 0.5rem;
  text-align: right;
`;
const cssCellHeader = css`
  ${cssCell};
  font-weight: 700;
`;
const cssCellName = css`
  ${cssCell};
  text-align: left;
`;

function ProjectPage({ projects }) {
  return (
    <>
      <div className="day">
        <div css={cssTableWrapper}>
          <span css={cssCellName}>Name</span>
          <span css={cssCellHeader}>Rate</span>
          <span css={cssCellHeader}>Status</span>
          <span css={cssCellHeader}></span>
          {projects.length &&
            projects.map((project) => {
              return (
                <React.Fragment key={project.id}>
                  <span css={cssCellName}>{project.name}</span>
                  <span css={cssCell}>
                    {project.rate} {project.currency}
                  </span>
                  <span css={cssCell}>{project.totalHours} h</span>
                  <span css={cssCell}>
                    <RemoveAction />
                  </span>
                </React.Fragment>
              );
            })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* {projects.length &&
        projects.map((project) => {
          return (
            <div className="day" key={project.id}>
              <div className="day-summary">
                <div className="day-summary--date">{project.name}</div>
                <div className="day-summary--details">
                  <div className="day-summary--hours">
                    {project.rate}
                    <span className="time-format">{project.currency}</span>
                  </div>
                  <div className="day-summary--hours">
                    {project.totalHours}
                    <span className="time-format">h</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
    </>
  );
}

export default ProjectPage;
