// import React from "react";

// const Users = ({ username }) => {
//   if (username === "Chombu") {
//     throw new Error("Chombu is bad... always throws an error");
//   }
//   return (
//     <div>
//       <h1>{username}</h1>
//     </div>
//   );
// };

// export default Users;

//! ============ for pure components ===========

import React, { PureComponent } from 'react'

export default class Users extends PureComponent {
    render() {
      console.log("pure components")
    return (
      <div>
        <h1>Pure Component</h1>
      </div>
    )
  }
}
