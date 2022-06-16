//* Imports
import styled from "styled-components";

//* Quesion Style
const QuestionStyle = styled.div`
  color: #fff;
  counter-reset: answer 0;
  background: #5746ea;
  padding: 50px 20px 50px 20px;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;

    li {
      counter-increment: answer 1;
      background-color: #f1c75b;
      width: 100%;
      height: 50px;
      padding: 10px;
      border-radius: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;

      &::before {
        content: counter(answer) " ";
        margin-right: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        background: #ff5e7d;
        border: 1px solid #ffffff;
      }

      &:hover {
        cursor: pointer;
      }
    }

    @media (min-width: 768px) {
      width: 450px;
    }
  }

  h3 {
    overflow: hidden;

    @media (min-width: 768px) {
      width: 500px;
      text-align: center;
    }
  }

  .correct {
    background: #4acf84;
  }
`;

//* Question JSX
function Question({ queue, checkAnswer, currentAns, currentQ }) {
  if (!queue) {
    return <h2 style={{ color: "#fff" }}>Wait untill Question Loading...</h2>;
  }

  const { title, answers, cAnswer } = queue;

  return (
    <QuestionStyle>
      <h3>{`${title.toString().replace("&quot;", `"`)}`}</h3>
      <ul>
        {answers.map((ans) => (
          <li
            key={ans}
            className={
              ans === currentAns && currentQ === title ? "correct" : ""
            }
            onClick={() => {
              checkAnswer(ans, cAnswer, title);
            }}
          >
            {`${ans.toString().replace("&quot;", `"`)}`}
          </li>
        ))}
      </ul>
    </QuestionStyle>
  );
}

export default Question;
