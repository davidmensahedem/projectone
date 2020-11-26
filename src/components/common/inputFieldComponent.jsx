import React from "react";

const InputComponent = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...rest} className="form-control" />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default InputComponent;
