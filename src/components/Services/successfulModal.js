import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import React, { Component } from "react";

class SuccessfulModal extends Component {
  render() {
    const { show, onClose } = this.props;
    return (
      <Modal show={show}>
        <ModalHeader
          class="alert alert-success mr-5 align-self-center"
          role="alert"
        >
          <ModalTitle class="alert-heading">
            Service Request Successful!
          </ModalTitle>
        </ModalHeader>
        <ModalBody className="pt-5">
          Your request has been submitted! We will contact you within 24hrs
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={onClose}>
            Ok
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default SuccessfulModal;
