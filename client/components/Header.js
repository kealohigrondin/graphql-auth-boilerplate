import React from "react";
import { graphql } from "react-apollo";
import CurrentUser from "../queries/CurrentUser";

function Header({ data }) {
  console.log(data);
  return data.loading ? <span>Loading</span> : <span>Header</span>;
}
export default graphql(CurrentUser)(Header);
