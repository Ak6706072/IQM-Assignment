import React, { useState, useEffect } from "react";
import "./style.css";
import Question from "./Question/Question";
import crypto from "crypto";

function Questions({ questions }) {
  const [page, setPage] = useState(1);
  const [showQuestions, setShowQuestion] = useState([]);

  const hitbottom = () => {
    console.log(
      window.innerHeight + window.pageYOffset,
      document.body.scrollHeight,
      page
    );
    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hitbottom);
  }, []);

  useEffect(() => {
    if (questions !== undefined) {
      let allQuest;
      if (page < questions.length % 7) {
        allQuest = questions.slice(0, page * 7);
      } else {
        allQuest = questions.slice(0);
      }
      setShowQuestion(allQuest);
    }
  }, [questions]);

  useEffect(() => {
    if (questions !== undefined) {
      const allQuest = questions.slice(0, page * 7);
      setShowQuestion(allQuest);
    }
  }, [page]);

  if (questions === undefined) {
    return (
      <div className="questions">
        <h2>QUESTIONS</h2>
      </div>
    );
  }
  return (
    <>
      <div className="questions">
        <h2>QUESTIONS</h2>
        {showQuestions.map((quest) => {
          return (
            <Question key={crypto.randomBytes(10).toString("hex")} {...quest} />
          );
        })}
      </div>
    </>
  );
}

export default Questions;
