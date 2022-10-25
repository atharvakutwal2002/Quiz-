import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import ScorePage from "./components/Score/ScorePage";
import StartingPage from "./components/StartingPage/StartingPage";

function App() {
  const [displayQuestionPage, setDisplayQuestionPage] = useState(false);
  const [displayResult , setDisplayResult]=useState(false);
  const [finalScore, setFinalScore]= useState(0);
  const QuestionDisplayHandler = () => {
    setDisplayQuestionPage(true);
  };
  const resultDisplayHandler=(score)=>{
    setFinalScore(score);
    setDisplayResult(true);
    localStorage.clear();
  }
  return (
    <div className="App">
      {(displayQuestionPage && !displayResult) && <QuestionPage  onDisplayResult={resultDisplayHandler}/>}
      {!displayQuestionPage && (
        <StartingPage onDisplayQuestion={QuestionDisplayHandler} />
      )}
      {displayResult && <ScorePage result={finalScore}/>}
    </div>
  );
}

export default App;
