import React, { useState } from "react";
import "./ActualQuestion.css";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const ActualQuestion = (props) => {
  const [classList,setClassList]=useState("optButton");
  const [isAttempted, setIsAttempted] = useState(false);
  const [isCorrectAns, setIsCorrectAns] = useState(false);
  const [chosenAns, setChosenAns] = useState("");

  const optionsArray = [
    props.question.correct_answer,
    ...props.question.incorrect_answers,
  ];

  const shuffledOptions = shuffle(optionsArray);

  const submitHandler = (e) => {
    setClassList("chosenOpt")
    const choosenOption = String(e.target.value);
    setChosenAns(choosenOption);
    if (choosenOption === String(props.question.correct_answer)) {
      setIsCorrectAns(true);
    }
    setIsAttempted(true);
  };

  const checkAnsforPrev = (ans) => {
    if (
      localStorage.getItem(props.queNo) ===
      String(props.question.correct_answer)
    ) {
      setIsCorrectAns(true);
    }
  };

  const showPrev = () => {
    if (props.queNo === 0) {
      console.log("sorry");
      return;
    }
    props.onShowPrev();
    return;
  };
  const showNext = () => {
    // if (localStorage.getItem(props.queNo)) {
    //   setIsAttempted(true);
    //   checkAnsforPrev();
    //   const ansStored = localStorage.getItem(props.queNo);
    //   const data = { isCorrectAns, ansStored };
    //   props.onChoose(data);
    //   props.onShowNext(isAttempted);
    // } else
    if (props.queNo === 9) {
      console.log("last");
      return;
    } else if (isAttempted) {
      const data = { isCorrectAns, chosenAns };
      props.onChoose(data);
      props.onShowNext(isAttempted);
      return;
    }
    return;
  };

  const finishHandler = () => {
    props.onFinish();
  };

  return (
    <div className="mainDiv">
      <div className="question">{props.question.question}</div>
      <div>
        <div className="options">
          <div className="title">Options</div>
          {shuffledOptions.map((e) => (
            <button
              key={e}
              className={
                localStorage.getItem(props.queNo) === e
                  ? "chosenOpt"
                  : " optButton"
              }
            
              onClick={submitHandler}
              value={e}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="togglingQueBtnDiv">
          <button
            className={props.queNo === 0 ? "firstQueClass" : "toggleQueBtn"}
            onClick={showPrev}
          >
            Prev
          </button>
          <button
            className={props.queNo === 9 ? "lastQueClass" : "toggleQueBtn"}
            onClick={showNext}
          >
            Next
          </button>
        </div>
        {props.queNo === 9 && (
          <button className="finishButton" onClick={finishHandler}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default ActualQuestion;
