import React, { useRef } from "react";
import { createPortal } from "react-dom";
import Form from "../reducer/Form";
import "../../global.css";

const Modal = () => {
  let modalRef = useRef();
  

 console.log(modalRef)
  return (
    <div className="modalBody" ref={modalRef}>
      {createPortal(
        <section className="portalBody">
          <Form />
        </section>,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default Modal;
