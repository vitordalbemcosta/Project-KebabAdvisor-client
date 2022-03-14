import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const FooterTag = styled.footer`
   {
    height: 10vh;
    background-color: #4bb455;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
  }
  a {
    color: white;
  }
  .my-react-icons {
    height: 40px;
    width: 40px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

function Footer() {
  return (
    <FooterTag>
      <a href="https://github.com/vitordalbemcosta" target="_blank" rel="noreferrer">
        <AiFillGithub className="my-react-icons" />
      </a>
      <a href="https://www.linkedin.com/in/v%C3%ADtordalbemcosta/" target="_blank" rel="noreferrer">
        <AiFillLinkedin className="my-react-icons" />
      </a>
    </FooterTag>
  );
}

export default Footer;
