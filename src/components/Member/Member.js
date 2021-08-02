/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/gymOverlayBg.jpg";
// Motivations sektion
const Member = ({ text }) => (
  <section css={styles} className="member">
    <h2>
      TÆNK <span>IKKE</span>, BEGYND <span>I DAG</span>!
    </h2>
    <p>
    Træning er hårdt arbejde for kroppen, og er du ny i fitnessverden, kan du hurtigt løbe eller løfte dig til en overbelastningsskade eller to, hvis du ikke passer på. Start langsomt op og husk pauserne.

    </p>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media(max-width: 850px) {
    h2{
      font-size: 30px;
    }
    p{
      padding: 0 20px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
