import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { userService } from "../../_services/user.service";

const User = () => {
  const { isLoading, data } = useQuery('users', userService.getAllUsers)
  const users = data || { "data": [] }

  if (isLoading) {
    return <div>Ca charge...</div>
  }

  return (
    <div className="User">
      {users.data.map((user) => (
        <div key={user.pseudo}>
          <h1>
            <Link to={`../edit/${user._id}`}>{user.pseudo}</Link>
          </h1>
          <span>{user.createdAt}</span>
        </div>
      ))}
    </div>
  );
};

export default User;
