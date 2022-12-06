import React from "react";
import AuthForm from "./AuthForm";
import mutation from "../queries/Login";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessages: [] };
  }

  onFormSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
      })
      .then((res) => {
        this.setState({ errorMessages: [] });
      })
      .catch((err) => {
        const errorMessages = err.graphQLErrors.map((err) => err.message);
        this.setState({ errorMessages });
      });
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
