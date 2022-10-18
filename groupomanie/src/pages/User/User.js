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
      Utilisateurs
      <table>
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Membre depuis</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.pseudo}>
              <td>
                <Link to={`../edit/${user._id}`}>{user.pseudo}</Link>
              </td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
