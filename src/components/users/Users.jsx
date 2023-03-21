import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  let { name } = useParams();
  let [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchUsers = async () => {
      let data = await window.fetch(`https://api.github.com/users/${name}`);
      let userData = await data.json();
      setUsers(userData);
    };

    fetchUsers();
  }, []);
  return (
    //   <div className='ListUser'>{
    //       users.length > 0 ? (users?.map((user, index) => {
    //           return (
    //               <div className="content" key={index + 1}>
    //                   <h1>{user.username}</h1>
    //                   <p>{user.email}</p>
    //                   <p>{ user.phone }</p>
    //               </div>
    //           )
    //       })):"loading..."
    // }

    // </div>
    <div>{users.login}</div>
  );
};

export default Users;
