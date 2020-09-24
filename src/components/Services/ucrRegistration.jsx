import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { ucrRegistration } from "./serviceRequest";
import SuccessfulModal from "./successfulModal";

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
    ucrRegistration(data);
    this.setState({ showSuccessful: true });
  };

  closeModal = () => {
    this.setState({ showSuccessful: false });
    window.location.reload();
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
          <form className=" layout " onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("email", "Email")}
            {this.renderInput("dot", "DOT")}
            {this.renderInput("description", "Description")}
            {this.renderButton("Submit")}
          </form>
        </div>
        <SuccessfulModal
          show={this.state.showSuccessful}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}

export default UcrRegistration;
