/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const ScheduleLinks = ({ setDay , day}) => {
  return (
    <div className="links" css={styles}>
      <button className={day === 'Monday' ? 'active' : ''} onClick={() => setDay("Monday")}>
        Mandag
      </button>
      <span>/</span>
      <button className={day === 'Tuesday' ? 'active' : ''} onClick={() => setDay("Tuesday")}>
        Tirsdag
      </button>
      <span>/</span>
      <button className={day === 'Wednesday' ? 'active' : ''} onClick={() => setDay("Wednesday")}>
        Onsdag
      </button>
      <span>/</span>
      <button className={day === 'Thursday' ? 'active' : ''} onClick={() => setDay("Thursday")}>
        Torsdag
      </button>
      <span>/</span>
      <button className={day === 'Friday' ? 'active' : ''} onClick={() => setDay("Friday")}>
        Fredag
      </button>
    </div>
  );
};

const styles = css`
  padding: 40px 0 0 0;
  button {
    color: #fff;
    text-decoration: none;
    background: none;
    border: none;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    &.active {
      color: #ed563b;
    }
  }
  span {
    color: #fff;
    padding: 0 16px;
  }
  @media(max-width: 640px) {
    button{
      font-size: 14px;
    }
  }
`;

export default ScheduleLinks;
