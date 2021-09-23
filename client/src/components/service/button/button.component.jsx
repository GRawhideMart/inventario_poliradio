import React from "react";
import Modal from "../modal";
import ModalContent from "../modal/content";
import ModalHeader from "../modal/header";
import ModalBody from "../modal/body";
import ModalFooter from "../modal/footer";

const Footer = ({ onSave }) => {
  return (
    <div>
      <button type="button" className="btn btn-danger" data-dismiss="modal">
        Chiudi
      </button>
      <button type="button" className="btn btn-success" onClick={onSave}>
        Salva
      </button>
    </div>
  );
};

const ModalButton = ({
  children,
  buttonType,
  targetId,
  labelId,
  buttonText,
  mini,
  modalTitle,
  onSave,
}) => {
  return (
    <div>
      <button
        type="button"
        className={
          mini ? `btn btn-mini btn-${buttonType}` : `btn btn-${buttonType}`
        }
        data-toggle="modal"
        data-target={`#${targetId}`}
      >
        {buttonText}
      </button>

      {/* <!-- Modal --> */}
      <Modal targetId={targetId} labelId={labelId}>
        <ModalContent>
          <ModalHeader labelId={labelId} title={modalTitle} />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Footer onSave={onSave} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalButton;
