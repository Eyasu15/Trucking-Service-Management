import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { ucrRegistration } from "./serviceRequest";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";

class UcrRegistration extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      email: "",
      dot: "",
      description: "",
    },
    errors: {},
    showSuccessful: true,
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.number().required().label("Phone"),
    email: Joi.string().email().required().label("Email"),
    dot: Joi.number().required().label("DOT"),
    description: Joi.string(),
  };

  doSubmit = () => {
    const { data } = this.state;
    ucrRegistration(data);
    this.setState({ showSuccessful: true });
  };

  closeModal = () => {
    this.setState({ showSuccessful: false });
  };
  render() {
    return (
      <div>
        <div className="row jumbotron jumbotron-fluid pl-4">
          <h1>UCR Registration </h1>
          <p>
            The Unified Carrier Registration (UCR) is a federal system of
            registering and collecting fees from operators of vehicles
            participating in interstate commerce.
          </p>
          <form className=" layout ">
            {this.renderInput("name", "Name")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("email", "Email")}
            {this.renderInput("dot", "DOT")}
            {this.renderInput("description", "Description")}
            {this.renderButton("Submit")}
          </form>
        </div>
        <Modal show={this.state.showSuccessful}>
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
            <button className="btn btn-success" onClick={this.closeModal}>
              Ok
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UcrRegistration;
