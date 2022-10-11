import React from "react";

import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserProvider";
export const UserCard = ({ user }) => {
  const { delUser } = useUsers();
  const navigate = useNavigate();
  return (
    <> 
      <tbody>
        <tr key={user.uuid}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button
              onClick={() => navigate(`/users/edit/${user.uuid}`)}
              className="btn btn-outline-warning"
            >
              <img
                src="https://img.icons8.com/parakeet/24/000000/experimental-edit-parakeet.png"
                alt=""
              />
            </button>
            <button
              onClick={() => delUser(user.uuid)}
              className="btn btn-outline-danger mx-2"
            >
              <img
                src="https://img.icons8.com/plasticine/24/000000/filled-trash.png"
                alt="trash"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserCard;
