/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
// Her har vi holdskemaet 
const Table = ({ day }) => {
  return (
    <table css={styles}>
      <tbody>
        <tr>
          <td>Stram op</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              10:00 - 11:30
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              14:00 - 15:30
            </span>
          </td>
          <td>Emil Sørensen</td>
        </tr>
        <tr>
          <td>Puls styrke</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
            09:00 - 10:30
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
            14:00 - 15:30
            </span>
          </td>
          <td>Jannik Hein</td>
        </tr>
        <tr>
          <td>Boxing</td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
            09:00 - 10:30
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
            14:00 - 15:30
            </span>
          </td>
          <td>Jannik Hein</td>
        </tr>
        <tr>
          <td>Udendørs løb</td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
            10:00 - 11:30
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
            15:00 - 16:30
            </span>
          </td>
          <td>Hector Bellerin</td>
        </tr>
        <tr>
          <td>Hatha yoga</td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
            10:00 - 11:30
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
            15:00 - 16:30
            </span>
          </td>
          <td>Nanna Flit</td>
        </tr>
      </tbody>
    </table>
  );
};

const styles = css`
  border-collapse: collapse;
  color: #fff;
  margin: 30px 0 0 0;
  td,
  th {
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  tr {
    td {
      padding: 40px 0;
      width: 200px;
      span {
        opacity: 1;
        transition: opacity 900ms ease-in-out;
      }
    }
  }
  .hidden {
    opacity: 0;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    tr {
      td {
        padding: 40px 0;
        width: 200px;
        span {
          font-size: 11px;
        }
      }
    }
  }
`;

export default Table;
