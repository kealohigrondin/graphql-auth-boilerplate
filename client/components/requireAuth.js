import React from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import query from "../queries/CurrentUser";

export default (WrappedComponent) => {
  class requireAuth extends React.Component {
    componentDidUpdate() {
      if (!this.props.data.loading && !this.props.data.user) {
        console.log("requireAuth blocked navigation");
        hashHistory.push("/login");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(query)(requireAuth);
};
