import React from "react";

const Modal = ({ children, targetId, labelId }) => {
  return (
    <div
      class="modal fade"
      id={targetId}
      tabindex="-1"
      role="dialog"
      aria-labelledby={labelId}
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        {children}
      </div>
    </div>
  );
};

export default Modal;
