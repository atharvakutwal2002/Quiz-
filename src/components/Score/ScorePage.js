import React from "react";
import classes from './ScorePage.module.css'

const ScorePage = (props) => {
  return <div className={classes.mainDiv}>Your Final Score is {props.result} /50</div>;
};

export default ScorePage;
