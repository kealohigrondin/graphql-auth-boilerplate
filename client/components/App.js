import React from "react";
import { Router, hashHistory, Route } from "react-router";

import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div>
      <Header />
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}
export default App;
