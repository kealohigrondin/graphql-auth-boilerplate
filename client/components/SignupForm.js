import React from "react";
import AuthForm from "./AuthForm";
import mutation from "../queries/Signup";
import { graphql } from "react-apollo";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3>Sign up</h3>
        <AuthForm mutate={this.props.mutate} />
      </div>
    );
  }
}
export default graphql(mutation)(SignupForm);
