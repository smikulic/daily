/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import RemoveAction from "../../components/remove-action";
import UnitFormatter from "../../components/unit-formatter";
import LoadSpinner from "../../components/load-spinner";
import HeaderWrapper from "../../components/header-wrapper";
import { cssListWrapper } from "../../style/patterns";

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

function ClientPage({ clientsData }) {
  return (
    <>
      <HeaderWrapper
        headerInputPlaceholder="Enter new client"
        headerInputOnChange={() => console.log("add client name")}
        headerSubmitOnClick={() => console.log("add client")}
      ></HeaderWrapper>
      <div css={cssListWrapper}>
        <div css={cssTableWrapper}>
          <span css={cssCellHeaderName}>Name</span>
          <span css={cssCellHeader}>Hours</span>
          <span css={cssCellHeader}>Rate</span>
          <span css={cssCellHeader}>Billed</span>
          <span css={cssCellHeader}></span>
          {clientsData.length ? (
            clientsData.map((client) => {
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
            })
          ) : (
            <span css={cssCellName}>
              <LoadSpinner />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default ClientPage;
