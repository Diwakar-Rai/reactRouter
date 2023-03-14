import React from "react";
import {Link, Outlet} from 'react-router-dom'
const DashBoard = () => {
  return (
    <section className="user-dashboard">
      <article>
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/dashboard">User Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/users">Users</Link>
            </li>
          </ul>
              </aside>
              <asice className="mainContent">
                  <div className="block">
                      <h1>User Dashboard</h1>
                      <Outlet/>
                  </div>
              </asice>
      </article>
    </section>
  );
};

export default DashBoard;
