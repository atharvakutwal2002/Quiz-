import React, { useState } from "react";
import useSWR from "swr";
import ActualQuestion from "../ActualQuestion/ActualQuestion";

// const QUESTIONS = [
//   {
//     question:
//       "The song &#039;Little April Shower&#039; features in which Disney cartoon film?",
//     correct_answer: "Bambi",
//     incorrect_answers: ["Cinderella", "Pinocchio", "The Jungle Book"],
//   },
//   {
//     question:
//       "Which student in Yandere Simulator is known for asking irritating and stupid questions?",
//     correct_answer: "Midori Gurin",
//     incorrect_answers: ["Kokona Hruka", "Oka Ruto", "Pipi Osu"],
//   },
//   {
//     question:
//       "The Konami Code is known as Up, Up, Down, Down, Left, Right, Right, Left, B, A, Start.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     question:
//       "What was the name of the protagonist in the movie Commando (1985)?",
//     correct_answer: "John Matrix",
//     incorrect_answers: ["Ben Richards", "Douglas Quaid", "Harry Tasker"],
//   },
//   {
//     question:
//       "Which of these is not a character in the game, &quot;Lethal League&quot;?",
//     correct_answer: "Rex",
//     incorrect_answers: ["Switch", "Candyman", "Sonata"],
//   },
//   {
//     question:
//       "In Left 4 Dead, which campaign has the protagonists going through a subway in order to reach a hospital for evacuation?",
//     correct_answer: "No Mercy",
//     incorrect_answers: ["Subway Sprint", "Hospital Havoc", "Blood Harvest"],
//   },
//   {
//     question:
//       "During Wimbledon, spectators in the grounds can buy the tennis balls that have been used in matches.",
//     correct_answer: "True",
//     incorrect_answers: ["False"],
//   },
//   {
//     question:
//       "Which author co-wrote &quot;The Communist Manifesto&quot; alongside Karl Marx?",
//     correct_answer: "Friedrich Engels",
//     incorrect_answers: ["Robert Owen", "Alexander Kerensky", "Paul Lafargue"],
//   },
//   {
//     question: "The term &quot;GTO&quot; was originated by Ferrari?",
//     correct_answer: "True",
//     incorrect_answers: ["False"],
//   },
//   {
//     question: "Which of these Japanese islands is the largest by area?",
//     correct_answer: "Shikoku",
//     incorrect_answers: ["Iki", "Odaiba", "Okinawa"],
//   },
// ];

const QuestionPage = (props) => {
  const QUESTIONS = props.questionsArray;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const finishTest = () => {
    props.onDisplayResult(currentScore);
  };

  const nextQuestion = (data) => {
    localStorage.setItem(currentQuestion, data.chosenAns);
    if (data.isCorrectAns) {
      setCurrentScore((prevScore) => {
        return prevScore + 5;
      });
    } else {
      setCurrentScore((prevScore) => {
        return prevScore - 1;
      });
    }
    console.log(currentScore);
  };

  const showPrevQue = () => {
    setCurrentQuestion((prevQueNo) => {
      return prevQueNo - 1;
    });
  };
  const showNextQue = (isAttempted) => {
    if (isAttempted) {
      setCurrentQuestion((prevQueNo) => {
        return prevQueNo + 1;
      });
      console.log(currentQuestion);
    }
    return;
  };

  return (
    <div>
      <ActualQuestion
        onFinish={finishTest}
        key={currentQuestion}
        queNo={currentQuestion}
        question={QUESTIONS[currentQuestion]}
        onChoose={nextQuestion}
        onShowPrev={showPrevQue}
        onShowNext={showNextQue}
      />
    </div>
  );
};

export default QuestionPage;
