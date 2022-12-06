import React from "react";
import query from "../queries/CurrentUser";
import { hashHistory } from "react-router";
import { graphql } from "react-apollo";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", messages: [] };
  }

  componentDidUpdate() {
    if (this.props.data.user) {
      //navigate to dashboard whenever a user is logged in or after they log in/sign up
      hashHistory.push("/dashboard");
    }
  }

  renderMessages() {
    return this.state.messages.map((msg) => {
      return <p key={msg}>{msg}</p>;
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("submitting");
    this.props
      .mutate({
        variables: { email: this.state.email, password: this.state.password },
        refetchQueries: [{ query }],
      })
      .then((res) => {
        this.setState({ messages: ["Success"] });
      })
      .catch((err) => {
        const errorMessages = err.graphQLErrors.map((err) => err.message);
        this.setState({ messages: errorMessages });
      });
  }

  render() {
    return (
      <div className="row container">
        <form className="col s6" onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          {this.state.messages && this.renderMessages()}
          <button className="btn" onClick={(e) => this.onFormSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default graphql(query)(AuthForm);
