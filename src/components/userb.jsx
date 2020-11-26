import React from "react";
import Joi from "joi-browser";
import ListInfo from "./common/useraInfo";
import AppForm from "./appForm";

class UserB extends AppForm {
  state = {
    data: {
      zvalue: 5,
      date: "2020-11-25",
      time: "10:00",
    },
    info: {},
    errors: {},
  };

  schema = {
    zvalue: Joi.number().min(1).max(50).required().label("Z value"),
    date: Joi.date().required().label("Date"),
    time: Joi.string().required().label("Time"),
  };

  getInfo = () => {
    try {
      let info = localStorage.getItem("Info");
      if (info) {
        this.setState({ info: JSON.parse(info) });
      }
    } catch (ex) {}
  };

  componentDidMount = () => {
    this.getInfo();
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        {this.renderJumbo("User B - Interface", "React UI for User B")}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ListInfo info={this.state.info} />
            </div>
            <div className="col">
              <form className="bg-light px-md-3 mb-2 border px-3 py-2 py-xs-4">
                {this.renderInput(
                  "zvalue",
                  "Enter a value for z",
                  "number",
                  "Enter z value"
                )}

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
                {this.renderButton("Submit")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserB;
