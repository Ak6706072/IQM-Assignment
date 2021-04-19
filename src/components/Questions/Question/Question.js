import React, { useState } from "react";
import Model from "./Model";
import "./style.css";

function Question({ creation_date, owner, title }) {
  const [model, setModel] = useState(false);
  const openModel = () => {
    setModel(!model);
  };

  return (
    <>
      <div className="question" onClick={openModel}>
        <div className="question_profile">
          <img src={owner.profile_image} alt="" />
        </div>
        <div className="question_info">
          <h3 className="question_owner_name">{owner.display_name}</h3>
          <h6 className="question_title">Question: {title}</h6>
          <small className="question_creation_date">
            Creation Date: {Date(creation_date)}
          </small>
        </div>
        <hr />
      </div>
      {model === true ? <Model /> : null}
    </>
  );
}

export default Question;
