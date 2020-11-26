import React from "react";
import AppForm from "./appForm";
import Joi from "joi-browser";

class UserA extends AppForm {
  state = {
    data: {
      xvalue: 20,
      fruit: "Mango",
      date: "2020-11-26",
      time: "10:30",
      yvalue: 10,
    },
    errors: {},
  };

  schema = {
    xvalue: Joi.number().min(1).max(50).required().label("X value"),
    fruit: Joi.string().required().label("Fruit"),
    date: Joi.date().required().label("Date"),
    time: Joi.string().required().label("Time"),
    yvalue: Joi.number().min(1).max(50).required().label("Y value"),
  };

  doSubmit = () => {
    const data = JSON.stringify(this.state.data);
    localStorage.setItem("Info", data);
    this.props.history.push("/userb");
    console.log("submitted");
  };

  render() {
    return (
      <div>
        {this.renderJumbo("User A - Interface", "React UI for User A")}
        <div className="container bg-light">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.handleSubmit} className="py-4 px-4 border">
                {this.renderInput(
                  "xvalue",
                  "Enter a value for x",
                  "number",
                  "Enter x value",
                  true
                )}
                {this.renderSelect("fruit", "Select your favourite fruit", [
                  "Mango",
                  "Pear",
                  "Orange",
                  "Apple",
                ])}
                {this.renderInput(
                  "date",
                  "Select a date",
                  "date",
                  "Select date",
                  false
                )}
                {this.renderInput(
                  "time",
                  "Select a time",
                  "time",
                  "Select time",
                  false
                )}
                {this.renderInput(
                  "yvalue",
                  "Enter a value for y",
                  "number",
                  "Enter y value",
                  false
                )}
                {this.renderButton("Submit")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserA;
