//cover .. background area middle of website

import { useState } from "react";

import MyVerticallyCenteredModal from "../Modal/Modal";

import Button from "react-bootstrap/Button";

import styled from "styled-components";

const SectionTag = styled.section`
   {
    background: url(https://images.unsplash.com/photo-1595777216528-071e0127ccbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)
      center no-repeat;
    background-size: cover;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 5em;
  }

  h3 {
    width: 30em;
    max-width: 100vw;
  }

  div {
    background-color: rgba(255, 165, 0, 0.3);
  }
`;

function Cover() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <SectionTag>
      <div>
        <h1>To Kebab Lovers</h1>
        <h3>
          From Kebab Lovers .
        </h3>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Signup now
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Log in
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </SectionTag>
  );
}

export default Cover;