import React, { useState } from "react";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox"

const Question = (props) => {
  const { data, currentQuestion } = props;
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleCheckBox = ( event, answersId, questionId) => {
    props.handleCheckBox(answersId, questionId)
  }
  return (
    <>
      {data.image ? (
        <div className="question-image">
          <img style={{ cursor: "pointer"}} onClick={() => setIsPreviewImage(true)} src={`data:image/jpeg;base64, ${data.image}`} alt="" />
          {isPreviewImage === true && 
          <Lightbox 
          image = {`data:image/jpeg;base64, ${data.image}`}
          title = {"Question image"}
          onClose= {() => setIsPreviewImage(false)}

          ></Lightbox>
          }
        </div>
      ) : (
        <div className="question-image"></div>
      )}
      <div className="question">
        Question {currentQuestion + 1}: {data.questionDescription}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((answer, index) => {
            return (
              <div key={`answer-${index}`} className="answer-child">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" checked={answer.isSelected} onChange={(event) => handleCheckBox(event, answer.id, data.questionId)}/>
                  <label className="form-check-label">{answer.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
