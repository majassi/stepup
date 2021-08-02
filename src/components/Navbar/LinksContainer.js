/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Link from "./Link";

// det er her at jeg sætter min nav bar op
const LinksContainer = ({ hidden }) => {
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>

      <Link name="VIDEOER" linkTo="#videoer" />
      <Link name="SE HOLD" linkTo="#sehold" />
      <Link name="HOLDSKEMA" linkTo="#holdskema" />
      <Link name="CITATER" linkTo="#citater" />
      <Link name="KONTAKT" linkTo="#kontakt" />

    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 820px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;
