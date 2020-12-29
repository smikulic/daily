/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import RemoveAction from "../../components/remove-action";
import UnitFormatter from "../../components/unit-formatter";

const cssTableWrapper = css`
  display: grid;
  grid-template-columns: 10fr 2fr 2fr 2fr 1fr;
`;

const cssCell = css`
  padding: 0.5rem;
  text-align: right;
`;
const cssCellHeader = css`
  ${cssCell};
  font-weight: 700;
`;
const cssCellHeaderName = css`
  ${cssCellHeader};
  text-align: left;
`;
const cssCellName = css`
  ${cssCell};
  text-align: left;
`;

function ClientPage({ clients }) {
  return (
    <>
      <div className="day">
        <div css={cssTableWrapper}>
          <span css={cssCellHeaderName}>Name</span>
          <span css={cssCellHeader}>Hours</span>
          <span css={cssCellHeader}>Rate</span>
          <span css={cssCellHeader}>Billed</span>
          <span css={cssCellHeader}></span>
          {clients.length &&
            clients.map((client) => {
              const formattedRate = new Intl.NumberFormat().format(client.rate);
              const formattedTotalBilled = new Intl.NumberFormat().format(
                client.totalBilled
              );

              return (
                <React.Fragment key={client.id}>
                  <span css={cssCellName}>{client.name}</span>
                  <span css={cssCell}>
                    {client.totalHours} <UnitFormatter>h</UnitFormatter>
                  </span>
                  <span css={cssCell}>
                    {formattedRate}{" "}
                    <UnitFormatter>{client.currency}</UnitFormatter>
                  </span>
                  <span css={cssCell}>
                    {formattedTotalBilled}{" "}
                    <UnitFormatter>{client.currency}</UnitFormatter>
                  </span>
                  <span css={cssCell}>
                    <RemoveAction />
                  </span>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ClientPage;
