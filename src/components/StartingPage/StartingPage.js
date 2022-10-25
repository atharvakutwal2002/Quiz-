import React from "react";
import classes from "./StartingPage.module.css";

const StartingPage = (props) => {
    const btnHandler=()=>{
        props.onDisplayQuestion();
    }

  return (
    <div className={classes.mainDiv}>
        <div className={classes.heading}>Rules</div>
      <div className={classes.rulesDiv}>
        <span >Once selected the option can't be changed.</span>
        <span>
          Correct option gives you 5 marks, and the wrong option deduces 1.
        </span>
        <span>
          You can't go to the next question without completing the present
          question.
        </span>
      </div>
      <button onClick={btnHandler} className={classes.startBtn}> Start the Quiz </button>
    </div>
  );
};

export default StartingPage;
