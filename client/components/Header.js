import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import mutation from "../queries/Logout";

import Loading from "./Loading";

function Header({ data, mutate }) {
  const onLogoutClick = () => {
    mutate({
      refetchQueries: [{ query }],
    });
  };
  const renderButtons = () => {
    if (data.user) {
      return (
        <li>
          <a onClick={() => onLogoutClick()}>Log out</a>
        </li>
      );
    }
    return (
      <div>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/login">Log In </a>
        </li>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/">Home</a>
          <ul className="right">{renderButtons()}</ul>
        </div>
      </nav>
    );
  };
  return data.loading ? <Loading /> : renderHeader();
}
export default graphql(mutation)(graphql(query)(Header));
