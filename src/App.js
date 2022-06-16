//* Imports
import _ from "lodash";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Customize from "./components/Customize";
import Questions from "./components/Questions";
import NotFound from "./components/NotFound";

//* App JSX
function App() {
  const [configs, setConfigs] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=${configs.amount}&category=${configs.category}&difficulty=${configs.difficulty}&type=${configs.type}`
      );
      const data = await res.data;

      const quests = [];

      for (let q of data.results) {
        const cAnswer = q.correct_answer;
        const incAnswers = q.incorrect_answers;
        const allAnswers = _.shuffle([cAnswer, ...incAnswers]);

        quests.push({ title: q.question, answers: allAnswers, cAnswer });
      }

      setQuestions(quests);
    };

    getQuestions();
  }, [configs]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/customize"
          element={<Customize onConfig={handleConfigs} />}
        />
        <Route path="/questions" element={<Questions qs={questions} />} />
        <Route path="/*" element={<NotFound qs={questions} />} />
      </Routes>
    </div>
  );

  async function handleConfigs(data) {
    setConfigs(data);
  }
}

export default App;
