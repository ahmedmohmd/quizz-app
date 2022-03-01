import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;

  > div {
    h1 {
      font-size: 4rem;
      font-family: "Luckiest Guy";
      max-width: 700px;
      color: #fff;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: black;
      background: #7235d1;
      padding: 25px;
      border-radius: 25px;

      @media (max-width: 425px) {
        font-size: 2.7rem;
        -webkit-text-stroke-width: 1px;
      }

      @media (max-width: 375px) {
        font-size: 2.3rem;
      }
    }

    button {
      padding: 0.8rem;
      border-radius: 10px;
      outline: none;
      background: #56c2e6;
      font-size: 1.7rem;
      font-family: "Luckiest Guy";
      border: none;
      color: #fff;
      transition: 0.5s;
      letter-spacing: 5px;

      &:hover {
        background-color: #49aacb;
      }
    }

    @media (max-width: 425px) {
      align-items: center !important;
    }
  }
`;

function Home() {
  const router = useNavigate();
  return (
    <HomeStyle className="d-flex justify-content-center align-items-center p-2">
      <div className="deno d-flex justify-content-center align-items-start flex-column gap-3">
        <h1>
          Test Your Knowladge in <span style={{ color: "#56c2e6" }}>CS</span>,{" "}
          <span style={{ color: "#ff8b64" }}>Video Games</span>,
          <span style={{ color: "#4acf84" }}> Books</span> and{" "}
          <span style={{ color: "#f1c75b" }}> General Knowladge</span>, Are You
          Ready
          <span style={{ color: "#ff5e7d" }}>?</span>
        </h1>
        <button
          onClick={() => router("/customize")}
          className="d-flex justify-content-center align-items-center gap-2"
        >
          <span>Start</span>
          <FaPlay style={{ fontSize: 30, color: "ff5e7d" }} />
        </button>
      </div>
    </HomeStyle>
  );
}

export default Home;
