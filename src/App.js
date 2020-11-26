import React from "react";
import { Switch, Route } from "react-router-dom";
import UserA from "./components/usera";
import UserB from "./components/userb";

const App = () => {
  return (
    <Switch>
      <Route path="/userb" component={UserB} />
      <Route path="/" exact component={UserA} />
    </Switch>
  );
};

export default App;
