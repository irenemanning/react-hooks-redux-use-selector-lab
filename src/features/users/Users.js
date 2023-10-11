import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state => state.users);
  const totalUsers = users.length;
  return (
    <div>
      <ul>
        Users!
        {users.map(user => (
          <li>{user.username}, {user.hometown}</li>
        ))}
        Total Users: {totalUsers}
      </ul>
    </div>
  );
}

export default Users;
