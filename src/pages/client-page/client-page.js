/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import UnitFormatter from "../../components/unit-formatter";
import LoadSpinner from "../../components/load-spinner";
import HeaderWrapper from "../../components/header-wrapper";
import {
  cssListWrapper,
  cssColorGray,
  cssColorPurple,
  cssColorRed,
  cssColorActionBackground,
} from "../../style/patterns";

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
const cssCellAction = css`
  ${cssCell};
  position: relative;
  cursor: pointer;
  color: ${cssColorGray};

  &:hover {
    color: ${cssColorPurple};
  }
`;
const cssCellActionDropdown = css`
  z-index: 10;
  position: absolute;
  right: 0;
  padding: 0.25rem;
  border-radius: 0.2rem;
  background: #fff;
  box-shadow: 0 0 6px 0 ${cssColorActionBackground};
`;
const cssCellActionDropdownItem = css`
  padding: 0.5rem;
  text-align: left;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${cssColorActionBackground};
  }
`;
const cssCellActionDropdownItemRemove = css`
  ${cssCellActionDropdownItem};
  color: ${cssColorRed};
`;
const cssHeaderRightElement = css`
  display: flex;
  margin-right: 1rem;
`;
const cssClientHeaderInput = css`
  width: 6rem;
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${cssColorGray};
  color: ${cssColorGray};
`;

function ClientPage({ clientsData, loading, addClient, removeClient }) {
  const [showCellAction, toggleCellAction] = useState(undefined);
  const [newClient, setNewClient] = useState({
    name: "",
    rate: "",
    currency: "USD",
  });

  return (
    <>
      <HeaderWrapper
        headerInputPlaceholder="Enter new client"
        headerInputOnChange={(event) =>
          setNewClient({ ...newClient, name: event.target.value })
        }
        headerSubmitOnClick={() => {
          addClient({ variables: { ...newClient } });
        }}
      >
        <div css={cssHeaderRightElement}>
          <input
            css={cssClientHeaderInput}
            placeholder="Billable rate..."
            type="text"
            onChange={(event) =>
              setNewClient({ ...newClient, rate: event.target.value })
            }
          />
        </div>
        <div css={cssHeaderRightElement}>
          <select
            css={cssClientHeaderInput}
            name="currency"
            onChange={(event) =>
              setNewClient({ ...newClient, currency: event.target.value })
            }
            defaultValue={newClient.currency}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="EUR">HRK</option>
          </select>
        </div>
      </HeaderWrapper>
      <div css={cssListWrapper}>
        <div css={cssTableWrapper}>
          <span css={cssCellHeaderName}>Name</span>
          <span css={cssCellHeader}>Hours</span>
          <span css={cssCellHeader}>Rate</span>
          <span css={cssCellHeader}>Billed</span>
          <span css={cssCellHeader}></span>
          {clientsData &&
            clientsData.length > 0 &&
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
                  <span css={cssCellAction}>
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      size="sm"
                      onClick={() => {
                        if (showCellAction === client.id) {
                          toggleCellAction(undefined);
                        } else {
                          toggleCellAction(client.id);
                        }
                      }}
                    />
                    {showCellAction === client.id && (
                      <div css={cssCellActionDropdown}>
                        <div css={cssCellActionDropdownItem}>Edit</div>
                        <div
                          css={cssCellActionDropdownItemRemove}
                          onClick={() => {
                            removeClient({ variables: { id: client.id } });
                            toggleCellAction(undefined);
                          }}
                        >
                          Remove
                        </div>
                      </div>
                    )}
                  </span>
                </React.Fragment>
              );
            })}
          {loading && (
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
