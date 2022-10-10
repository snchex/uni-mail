import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3030/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3030/user/delete/${userId}`);
    getUsers();
  };

  return (
    <div className="card mx-auto col-md-6">
      <h1 className="title">Usuarios</h1>
      <hr />
      <h2 className="subtitle">Lista de Usuarios</h2>
      <Link to="/users/add" className="btn btn-primary mb-2">
        Nuevo Usuario
      </Link>
      <table className="table table-borderles">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="btn btn-outline-warning"
                >
                  <img
                src="https://img.icons8.com/parakeet/24/000000/experimental-edit-parakeet.png"
                alt=""
              />
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="btn btn-outline-danger mx-2"
                >
                   <img
                src="https://img.icons8.com/plasticine/24/000000/filled-trash.png"
                alt="trash"
              />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
