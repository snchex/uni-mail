import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

export const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  let update = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      const getUserById = async () => {
        try {
          const response = await axios.get(`http://localhost:3030/user/${id}`);
          setName(response.data.name);
          setEmail(response.data.email);
          setRole(response.data.role);
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
      getUserById();
    }, 100);
    return () => clearTimeout(timer);
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3030/user/update/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      update = true;
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const clearInput = () => {
    const timer = setTimeout(() => {
      if (!msg && update === true) {
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
      if (!msg && update === true) {
        navigate("/users");
      }
    }, 500);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card mx-auto col-md-4">
      <h1 className="title">Usuario</h1>
      <hr />
      <h2 className="subtitle">Actualizar Usuario</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
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
                  autoComplete="false"
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
    </div>
  );
};

export default FormEditUser;
