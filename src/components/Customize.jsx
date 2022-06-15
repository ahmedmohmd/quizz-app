import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useLayoutEffect } from "react";
import styled from "styled-components";

const CustomizeStyle = styled.div`
  height: 100vh;

  h1 {
    background-color: #ff8b64;
    padding: 15px;
    border-radius: 15px;
    border: 8px solid #ffbaa3;
    margin-bottom: 50px;
    color: #fff;
  }

  .form {
    width: 700px;

    select,
    input {
      height: 60px;
      font-size: 1.1rem;
      border: none;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      background: #4b509b73;
    }

    button {
      width: 100%;
      height: 65px;
      border-radius: 15px;
      font-size: 1.5rem;

      font-size: 20px;
      background: #5746ea;
      outline: none;
      border: 6px solid #a298ff;

      &:hover {
        background: #4939cf;
      }
    }
  }
`;

function Customize({ onConfig }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    category: 9,
    difficulty: "easy",
    type: "multiple",
    amount: 10,
  });

  useLayoutEffect(() => {
    document.body.style.background = "red";
  });

  return (
    <CustomizeStyle className="d-flex justify-content-center align-items-center flex-column">
      <h1>Questions Options</h1>
      <Container className="c d-flex justify-content-center align-items-center ">
        <Form onSubmit={submitHandler} className="form">
          <Form.Group className="mb-3">
            <Form.Label className="badge bg-warning">
              Select Category
            </Form.Label>
            <Form.Select
              onChange={(e) => setData({ ...data, category: e.target.value })}
            >
              <option value={9}>{"General Knowladge"}</option>
              <option value={18}>{"Computers"}</option>
              <option value={15}>{"Video Games"}</option>
              <option value={10}>{"Books"}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="badge bg-warning">
              Select Difficulty
            </Form.Label>
            <Form.Select
              onChange={(e) => setData({ ...data, difficulty: e.target.value })}
            >
              <option value={"easy"}>{"Easy"}</option>
              <option value={"medium"}>{"Medium"}</option>
              <option value={"hard"}>{"Hard"}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="badge bg-warning">Select Type</Form.Label>
            <Form.Select
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value={"multiple"}>{"MCQ"}</option>
              <option value={"boolean"}>{"True / False"}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="qs-number">
            <Form.Label className="badge bg-warning">Select Amount</Form.Label>
            <Form.Control
              type="number"
              value={data.amount}
              onChange={(e) => setData({ ...data, amount: +e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-5">
            Start
          </Button>
        </Form>
      </Container>
    </CustomizeStyle>
  );

  function submitHandler(e) {
    e.preventDefault();
    onConfig(data);
    navigate("/questions");
  }
}

export default Customize;
