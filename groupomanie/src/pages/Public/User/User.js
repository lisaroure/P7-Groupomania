import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { userService } from "../../../_services/user.service";

const User = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      userService
        .getAllUsers()
        .then((res) => {
          console.log(res.data);
          setUsers(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    // méthode pour éviter le double appel useEffect
    return () => (flag.current = true);
  }, []);

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
          {users.map((user) => (
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
