import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Container } from "react-bootstrap";
import React, { useState, useLayoutEffect } from "react";
import Question from "./common/Question";
import CongratsPage from "./CongratsPage";

const QuestionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
  height: 100vh;
  width: 100%;

  h1 {
    background-color: #fffa4d;
    padding: 15px;
    border-radius: 15px;
    border: 8px solid #acaba2a8;
  }

  .next {
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

  .finish {
    padding: 8px;
    border-radius: 5px;
    font-size: 20px;
    background: #ff5e7d;
    outline: none;
    border: 5px solid #fdc0cc82;
    color: #fff;

    &:hover {
      background: #e95572;
    }
  }
`;

function Questions({ qs }) {
  const [count, setCount] = useState(0);
  const [correctAns, setCorrectAns] = useState("");
  const [answer, setAnswer] = useState("");
  const [title, setTitle] = useState("");
  const [result, setResult] = useState({
    correctAnswers: 0,
    incorrectAnswers: 0,
  });

  useLayoutEffect(() => {
    document.body.style.background = "#1d204b";
  });

  if (count === qs.length && count >= 1) {
    return (
      <CongratsPage
        cAnswers={result.correctAnswers}
        incAnswers={result.incorrectAnswers}
      />
    );
  }

  return (
    <Container>
      <QuestionsStyle>
        <h1>Questions</h1>
        {
          <Question
            queue={qs[count]}
            checkAnswer={checkAnswer}
            currentAns={answer}
            currentQ={title}
          />
        }

        <button
          onClick={handleCount}
          className={
            "d-flex gap-2 justify-content-center align-items-center " +
            (count === qs.length - 1 ? "finish" : "next")
          }
        >
          <span>{count === qs.length - 1 ? "Finish" : "Next"}</span>
          <FaPlay style={{ color: "#fff" }} />
        </button>
      </QuestionsStyle>
    </Container>
  );

  function handleCount() {
    if (answer === correctAns && answer) {
      setResult({ ...result, correctAnswers: result.correctAnswers + 1 });
    } else {
      setResult({ ...result, incorrectAnswers: result.incorrectAnswers + 1 });
    }

    if (count < qs.length) {
      setCount(count + 1);
    }
  }

  function checkAnswer(ans, cAnswer, t) {
    setAnswer(ans);
    setCorrectAns(cAnswer);
    setTitle(t);
  }
}

export default Questions;
