import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

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

  render() {
    return (
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
        {this.state.showSuccessful && (
          <div class="alert alert-success mr-5 align-self-center" role="alert">
            <h4 class="alert-heading">Service Request Successful!</h4>
            <p className="pt-5">Your request has been submitted!</p>
            <p>We will contact you within 24hrs</p>
          </div>
        )}
      </div>
    );
  }
}

export default UcrRegistration;
