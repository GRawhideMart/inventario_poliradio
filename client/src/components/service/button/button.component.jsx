import React from "react";
import Modal from "../modal";
import ModalContent from "../modal/content";
import ModalHeader from "../modal/header";
import ModalBody from "../modal/body";
import ModalFooter from "../modal/footer";

const ModalButton = ({ buttonType, targetId, labelId, buttonText }) => {
  return (
    <div>
      <button
        type="button"
        class={`btn btn-${buttonType}`}
        data-toggle="modal"
        data-target={`#${targetId}`}
      >
        {buttonText}
      </button>

      {/* <!-- Modal --> */}
      <Modal targetId={targetId} labelId={labelId}>
        <ModalContent>
          <ModalHeader labelId="exampleModalLabel" title="Title of modal" />
          <ModalBody>Things here will appear inside the body</ModalBody>
          <ModalFooter>
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-success">
              Save changes
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalButton;
