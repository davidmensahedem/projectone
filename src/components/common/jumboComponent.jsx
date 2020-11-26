import React from "react";

const JumboComponent = ({ hlabel, plabel }) => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1>{hlabel}</h1>
        <p className="lead text-muted">{plabel}</p>
      </div>
    </section>
  );
};

export default JumboComponent;
