import React from "react";
import CountDown from "./CountDown";
import { useRef } from "react";

const MainCounter = (props) => {
    const refQ = useRef([]);
    
  const { dataQuiz } = props;
  const onTimeUp = () => {
    props.handleFinish();
  };
  const getClassQuestion = (question) => {
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find((a) => a.isSelected === true);
      if (isAnswered) {
        return "question selected";
      }
    }
    return "question";
  };

  const handleClickQuestion = (question, index) => { 
    props.setCurrentQuestion(index);
    if(refQ.current) {
        refQ.current.forEach(item => {
            if(item && item.className === "question clicked") {
                item.className = "question"
            }
        })
    }   
    if (question && question.answers.length > 0) {
        let isAnswered = question.answers.find((a) => a.isSelected === true);
        if (isAnswered) {
          return;
        }
      }
    refQ.current[index].className = "question clicked";
  }
  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                key={`question-q-${index}`}
                className={getClassQuestion(item, index)}
                onClick={() => handleClickQuestion(item, index)}
                ref={element => refQ.current[index] = element}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MainCounter;
