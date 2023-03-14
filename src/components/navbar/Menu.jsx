import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/dashboard">User Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
