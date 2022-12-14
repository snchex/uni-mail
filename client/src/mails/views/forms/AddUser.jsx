import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  let create = false;
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3030/user/create", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      create = true;
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const clearInput = () => {
    const timer = setTimeout(() => {
      if (create === true) {
        setName([]);
        setEmail([]);
        setPassword([]);
        setConfPassword([]);
        setRole([]);
        setMsg([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  };

  const verUser = () => {
    const timer = setTimeout(() => {
      if (create === true) {
        navigate("/users");
      }
    }, 500);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card col-md-4 mx-auto ">
      <h1 className="title">Usuario</h1>
      <hr />
      <h2 className="subtitle">A&ntilde;adir Nuevo Usuario</h2>
      <div className="card">
        <div className="card-content">
          <form onSubmit={saveUser}>
            <p className="error pl-5">{msg}</p>
            <div className="form-group flex-column d-flex">
              <label className="label">Name</label>

              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group flex-column d-flex">
              <label className="label">Email</label>

              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="form-group flex-column d-flex">
              <label className="form-control-label px-2">Password</label>

              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
            </div>
            <div className="form-group flex-column d-flex">
              <label className="label">Confirm Password</label>

              <input
                type="password"
                className="input"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                placeholder="******"
              />
            </div>
            <div className="form-group flex-column d-flex">
              <label className="label">Role</label>

              <div className="select is-fullwidth">
                <Form.Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option disabled selected value="">
                    Seleccione
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Form.Select>
              </div>
            </div>
            <div className="form-group  px-3">
              <td>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={verUser}
                >
                  Guardar y Ver
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  type="submit"
                  onClick={clearInput}
                >
                  Guardar y Continuar
                </button>
              </td>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
