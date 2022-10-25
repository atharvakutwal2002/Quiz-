import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import ScorePage from "./components/Score/ScorePage";
import StartingPage from "./components/StartingPage/StartingPage";

async function fetchQuestions() {
  // const data = await fetch("https://opentdb.com/api.php?amount=10");
  // const que = await data.json();
  // const actualQuestions = que.results;
  // return actualQuestions;

  const response = await fetch("https://opentdb.com/api.php?amount=10");

  const data = await response.json();

  const questions = [];
  for (const key in data) {
    questions.push({
      id: key,
      ...data[key],
    });
  }
  return questions;
}

 function App() {
  // let questionsArray=[];
  const questions =  fetchQuestions();
  console.log(questions);

  const [displayQuestionPage, setDisplayQuestionPage] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const QuestionDisplayHandler = () => {
    setDisplayQuestionPage(true);
  };
  const resultDisplayHandler = (score) => {
    setFinalScore(score);
    setDisplayResult(true);
    localStorage.clear();
  };
  return (
    <div className="App">
      {displayQuestionPage && !displayResult && (
        <QuestionPage
          // questionsArray={questionsArray}
          onDisplayResult={resultDisplayHandler}
        />
      )}
      {!displayQuestionPage && (
        <StartingPage onDisplayQuestion={QuestionDisplayHandler} />
      )}
      {displayResult && <ScorePage result={finalScore} />}
    </div>
  );
}

export default App;
