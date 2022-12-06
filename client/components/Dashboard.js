import React from "react";
import requireAuth from "./requireAuth";

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>You are now logged in</p>
    </div>
  );
}
export default requireAuth(Dashboard);
