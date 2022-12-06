import React from "react";
import AuthForm from "./AuthForm";
import mutation from "../queries/Login";
import { graphql } from "react-apollo";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm mutate={this.props.mutate} />
      </div>
    );
  }
}
export default graphql(mutation)(LoginForm);
