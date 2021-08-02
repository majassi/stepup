/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import ContactBg from "../Image/contactBg.jpg";
// Her har vi kontaktformularen 
const Form = ({ text }) => (
  
  <div css={styles} className="formContainer">
    <form action="https://formspree.io/f/xjvjvrrk" method="POST">
      <input type="text" placeholder="Navn*" required/>
      <input type="text" placeholder="E-mail*" required/>
      <input type="text" placeholder="Emne*" required/>
      <textarea cols="30" rows="10" placeholder="Besked*" required></textarea>
      <Button text="SEND"  id="sendMessageButton" type="submit"/>
    </form>
  </div>
);

const styles = css`
  width: 100%;
  padding: 80px;
  min-height: 60vh;
  display: flex;
  background: url('${ContactBg}') no-repeat center/cover;
  form {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    input,
    textarea {
      margin-bottom: 20px;
      padding: 14px;
      border: 1px solid #ddd;
      outline: none;
      color: #7a7a7a;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-child(3) {
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 80px 30px;
    form {
      max-width: 900px;
    }
  }
`;

export default Form;
