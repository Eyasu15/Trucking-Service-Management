import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { carrierPacket } from "./serviceRequest";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";

class CarrierPacket extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      email: "",
      dot: "",
      description: "",
    },
    errors: {},
    showSuccessful: false,
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
    carrierPacket(data);
    this.setState({ showSuccessful: true });
  };

  closeModal = () => {
    this.setState({ showSuccessful: false });
    window.location.reload();
  };

  render() {
    return (
      <div className="row jumbotron jumbotron-fluid pl-4 pr-3">
        <h1>Carrier Packet </h1>
        <p>
          The carrier Packet is an agreement between the carrier and the broker
          and it allows the carrier to carry out the load with principles in
          place.
        </p>
        <form className=" column ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("dot", "DOT")}
          {this.renderInput("description", "Description")}
          {this.renderButton("Submit")}
        </form>
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
        <div style={{ color: "red" }} className="column container pl-5">
          <h3>Required Materials</h3>
          <ul>
            <li>MC</li>
            <li>Insured Truck and Trailer</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CarrierPacket;
