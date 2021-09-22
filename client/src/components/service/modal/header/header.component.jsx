import React from "react";
import PropTypes from "prop-types";

const ModalHeader = ({ children, title, labelId }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id={labelId}>
        {title}
      </h5>
      {children}
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default ModalHeader;
