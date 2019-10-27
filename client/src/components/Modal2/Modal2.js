import React from "react";
import "./Modal2.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName =  show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <br></br>
          <button className="btn btn-danger modal-btn" onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

  export default Modal;