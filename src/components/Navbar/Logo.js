/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
// her er mit logo
const Logo = () => (
  <h2 css={styles}>
    STEP <span>UP</span> 
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 25px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #ed563b;
  }
`;

export default Logo;
