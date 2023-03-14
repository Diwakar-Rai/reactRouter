import React, { useState, useEffect } from 'react'

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        let fetchUsers = async () => {
            let data = await window.fetch("https://fakestoreapi.com/users");
            let userData = await data.json();
            setUsers(userData);
        }

        fetchUsers();
    }, []);
  return (
      <div className='ListUser'>{
          users.length > 0 ? (users?.map((user, index) => {
              return (
                  <div className="content" key={index + 1}>
                      <h1>{user.username}</h1>
                      <p>{user.email}</p>
                      <p>{ user.phone }</p>
                  </div>
              )
          })):"loading..."
    }
      
    </div>
  )
}

export default Users
