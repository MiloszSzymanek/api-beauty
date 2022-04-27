import React from "react";
import Login from "../Login/Login";
import "../UserModal/UserModal.css";
import { GrClose } from "react-icons/gr";

export default function userModal(props) {
  return (
    <div
      className={
        props.modalState === true ? "showUserModal" : "userModalContainer"
      }
    >
      <div className="closeModalDiv">
        <GrClose
          className="closeIcon"
          onClick={() => {
            props.closeModal(false);
          }}
        />{" "}
      </div>
      <div className="loginSection">
        <Login closeModal={props.closeModal} />
      </div>

      <div className="registerLink">
        <h2>Don't have an account yet?</h2>
        <div className="registerLinkButton">Register</div>
      </div>
    </div>
  );
}
