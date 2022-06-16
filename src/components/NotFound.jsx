//* Imports
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//* NotFound Style
const NotFoundStyle = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    background-color: #ff5e7d;
    padding: 15px;
    border-radius: 15px;
    border: 8px solid #fb879d;
    color: #fff;
    font-size: 3.5rem;
  }

  button {
    padding: 8px;
    border-radius: 5px;
    font-size: 20px;
    background: #4acf84;
    outline: none;
    border: 5px solid #a4fbca;
    color: #fff;
    font-weight: 600;

    &:hover {
      background: #42b976;
    }
  }
`;

//* NotFound JSX
function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundStyle className="d-flex justify-content-center align-items-center flex-column align-items-center gap-5">
      <h1>An Error Occured</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </NotFoundStyle>
  );
}

export default NotFound;
