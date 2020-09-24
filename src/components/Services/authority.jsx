import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import Axios from "axios";
import { getAuthority } from "./serviceRequest";

class Authority extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      email: "",
    },
    errors: {},
    showSuccessful: false,
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.number().required().label("Phone"),
    email: Joi.string().email().required().label("Email"),
  };

  doSubmit = () => {
    const { data, showSuccessful } = this.state;
    getAuthority(data);
    this.setState({ showSuccessful: true });
  };

  render() {
    return (
      <div className="row jumbotron jumbotron-fluid pl-4">
        <h1 className="widget-title">Get Your Authority </h1>
        <p>
          So we heard you’re thinking about going fully independent. You’ve
          probably decided to get your own authority so you can cut out the
          middleman and keep more income for yourself while operating more
          independently.Having your own carrier authority means you have the
          government’s permission to get paid for hauling freight as your own
          trucking company.
        </p>
        <form className="column container" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Submit")}
        </form>
        {this.state.showSuccessful && (
          <div class="alert alert-success mr-5 align-self-center" role="alert">
            <h4 class="alert-heading">Service Request Successful!</h4>
            <p className="pt-5">Your request has been submitted!</p>
            <p>We will contact you within 24hrs</p>
          </div>
        )}
        <div style={{ color: "red" }} className="column container pl-5">
          {/* <h3>Required Materials</h3>
          <ul>
            <li>
              Run under your own MC number - we’ll take care of all the
              paperwork
            </li>
            <li>
              We’ll file your federal and state permits, so you don’t have to
              worry about what step is next
            </li>
            <li>
              Get guidance through the whole process, even after you’re up and
              running
            </li>
            <li>
              Avoid delays by letting the experts take care of the legal stuff
            </li>
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Authority;
