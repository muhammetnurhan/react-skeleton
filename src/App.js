import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login, Home, User } from "./pages/";
import { PublicRoute, PrivateRoute } from "./router/";
const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/user/:id" component={User} />
      </Switch>
    </Router>
  );
};

export default App;
