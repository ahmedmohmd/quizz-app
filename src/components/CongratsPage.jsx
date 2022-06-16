//* Imports
import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//* Congrats STyle
const CongratsPageStyle = styled.div`
  height: 100vh;

  h1 {
    background-color: #4acf84;
    padding: 15px;
    border-radius: 15px;
    border: 8px solid #85ffba;
    color: #fff;
    font-size: 2rem;
  }

  .results {
    background: #f1c75b;
    padding: 75px;
    border-radius: 20px;
    border: 8px solid #e9dab5;

    .c-a,
    .in-ca {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      font-size: 20px;
    }
  }

  button.retake {
    padding: 8px;
    border-radius: 5px;
    font-size: 20px;
    background: #4acf84;
    outline: none;
    border: 5px solid #a4fbca;
    color: #fff;

    &:hover {
      background: #42b976;
    }
  }

  button.home {
    padding: 8px;
    border-radius: 5px;
    font-size: 20px;
    background: #ff8b64;
    outline: none;
    border: 5px solid #ffbea8;
    color: #fff;

    &:hover {
      background: #e97953;
    }
  }
`;

//* Congrats JSX
function CongratsPage({ cAnswers, incAnswers }) {
  const navigate = useNavigate();

  return (
    <CongratsPageStyle className="d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col>
            <div className="c d-flex flex-column gap-5 justify-content-center align-items-center">
              <h1>Congratolations!</h1>
              <div className="results ">
                <div className="c-a">
                  <h3>Correct Ansswers:</h3>{" "}
                  <Badge bg={"success"}>{cAnswers}</Badge>
                </div>
                <div className="in-ca">
                  <h3>Incorrect Ansswers:</h3>{" "}
                  <Badge bg={"danger"}>{incAnswers}</Badge>
                </div>
              </div>
              <div className="btns d-flex justify-content-center align-items-center gap-3">
                <button
                  onClick={() => navigate("/customize")}
                  className="retake"
                >
                  Retake
                </button>
                <button onClick={() => navigate("/")} className="home">
                  Home
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </CongratsPageStyle>
  );
}

export default CongratsPage;
