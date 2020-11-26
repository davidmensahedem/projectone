import React from "react";

const ListInfo = ({ info }) => {
  return (
    <ul className="list-group mb-4">
      <li className="list-group-item active">User A - Information</li>
      <li className="list-group-item">Value of x : {info["xvalue"]}</li>
      <li className="list-group-item">Fruit : {info["fruit"]}</li>
      <li className="list-group-item">Date Selected : {info["date"]}</li>
      <li className="list-group-item">Time Selected : {info["time"]}</li>
      <li className="list-group-item">Value of y : {info["yvalue"]}</li>
    </ul>
  );
};

export default ListInfo;
