import React from "react";
import { Router, hashHistory, Route } from "react-router";
import Dashboard from "./Dashboard";

import Header from "./Header";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function App() {
  return (
    <div>
      <Header />
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="login" component={LoginForm} />
        <Route path="signup" component={SignupForm} />
        <Route path="dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}
export default App;
