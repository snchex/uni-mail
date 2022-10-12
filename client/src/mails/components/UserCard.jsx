import React from "react";

import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserProvider";
export const UserCard = ({ usuario }) => {
  const { delUser } = useUsers();
  const navigate = useNavigate();
  return (
    <> 
      <tbody>
        <tr key={usuario.uuid}>
          <td>{usuario.id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.role}</td>
          <td>
            <button
              onClick={() => navigate(`/users/edit/${usuario.uuid}`)}
              className="btn btn-outline-warning"
            >
              <img
                src="https://img.icons8.com/parakeet/24/000000/experimental-edit-parakeet.png"
                alt=""
              />
            </button>
            <button
              onClick={() => delUser(usuario.uuid)}
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
