import React, { useState } from "react";
import "./style.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
function Question({ creation_date, link, owner, title }) {
  const [modalIsOpen, setModalOption] = useState(false);
  return (
    <>
      <div className="question" onClick={() => setModalOption(true)}>
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
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalOption(false)}
        style={{ overlay: { backgroundColor: "gray" } }}
      >
        <h2>Question: {title}</h2>
        <div>{link}</div>
        <small>
          because Actual question description is not in the Api that i am using
        </small>

        <div>
          <button
            onClick={() => {
              setModalOption(false);
            }}
          >
            close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Question;
