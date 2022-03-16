import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class Formcc extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    nameError: "",
    nameMatchError: "",
    emailErr: "",
    emailMatchError: "",
    numberErr: "",
    numberMatchErr: "",
  };

  onHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({ [name]: value });
  };

  validationCheck = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "name" && value === "") {
      this.setState({ nameError: "Enter Name" });
      console.log("Name not entered");
    }
    if (name === "email" && value === "") {
      this.setState({ emailErr: "Enter Email" });
      console.log("Email not entered");
    }
    if (name === "number" && value === "") {
      this.setState({ numberErr: "Enter Phone number" });
      console.log("Number not entered");
    }
    let reg = /^[a-zA-Z0-9]*$/;
    if (name === "name" && reg.test(value) === false) {
      this.setState({ nameMatchError: "Enter Valid Name" });

      console.log("Not Valid name");
    }
    let emailreg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (name === "email" && emailreg.test(value) === false) {
      this.setState({ emailMatchError: "Enter Valid Email" });

      console.log("Not Valid Email");
    }

    let numberReg = /^[0-9]+$/;
    if (name === "number" && numberReg.test(value) === false) {
      this.setState({ numberMatchErr: "Enter Valid Number" });
      console.log("Not Valid Number");
    }
    if (name === "number" && value.length !== 10) {
      this.setState({ numberMatchErr: "Number must at least 10 digits" });
    } else {
      console.log("Invalid", value.length);
    }
  };

  onFormSubmit(e) {
    e.preventDefault();

    console.log(this.state);
  }
  render() {
    const {
      nameError,
      nameMatchError,
      emailError,
      emailMatchError,
      numberError,
      numberMatchErr,
    } = this.state;
    return (
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <Form.Group>
            <label className="col">Enter your full name:</label>
            <input
              type="text"
              name="name"
              onFocus={this.onFoucsCheck}
              onBlur={(e) => this.validationCheck(e)}
              onChange={(e) => this.onHandleChange(e)}
              placeholder="Enter your full name"
            />
            {nameError ? <span className="text-danger">{nameError}</span> : ""}
            {nameMatchError ? (
              <span className="text-danger">{nameMatchError}</span>
            ) : (
              ""
            )}
          </Form.Group>
          <div>
            <label>Enter your email address:</label>
            <input
              type="email"
              name="email"
              onBlur={(e) => this.validationCheck(e)}
              onChange={(e) => this.onHandleChange(e)}
              placeholder="Enter your your email address"
            />
            {emailError ? (
              <span className="text-danger">{emailError}</span>
            ) : (
              ""
            )}
            {emailMatchError ? (
              <span className="text-danger">{emailMatchError}</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Number</label>
            <input
              type="tel"
              maxLength="10"
              name="number"
              onBlur={(e) => this.validationCheck(e)}
              onChange={(e) => this.onHandleChange(e)}
              placeholder="Enter your Number"
            />
            {numberError ? (
              <span className="text-danger">{numberError} </span>
            ) : (
              ""
            )}
            {numberMatchErr ? (
              <span className="text-danger">{numberMatchErr} </span>
            ) : (
              ""
            )}
          </div>
          <button className="mt-5" variant="primary" type="submit">
            Click here to submit form
          </button>
        </form>
      </div>
    );
  }
}

export default Formcc;
