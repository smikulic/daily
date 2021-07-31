/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
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

function ClientPage({ clientsData, addClient, removeClient }) {
  const [newClient, setNewClient] = useState({
    name: "",
    rate: "",
    currency: "",
  });

  return (
    <>
      <HeaderWrapper
        headerInputPlaceholder="Enter new client"
        headerInputOnChange={(event) =>
          setNewClient({ ...newClient, name: event.target.value })
        }
        headerSubmitOnClick={() => {
          addClient({ variables: { input: newClient } });
        }}
      >
        <input
          type="text"
          value={newClient.rate}
          onChange={(event) =>
            setNewClient({ ...newClient, rate: event.target.value })
          }
        />
        <select
          name="currency"
          onChange={(event) =>
            setNewClient({ ...newClient, currency: event.target.value })
          }
          defaultValue="USD"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </HeaderWrapper>
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
                    <RemoveAction
                      onClick={() =>
                        removeClient({
                          variables: { input: { id: client.id } },
                        })
                      }
                    />
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
