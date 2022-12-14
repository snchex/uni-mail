import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, reset } from "../../../../auth/authSlice";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../assets/logo192.png";
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav>
      <img className="logo " src={logo} alt="logo" />

      <ul className="d-flex">
        <li>
          <Link className="active" to="/home">
            Inicio
          </Link>
        </li>
        <li>
          <DropdownButton
            style={{ margin: 0 }}
            id="dropdown-basic-button"
            title="Correos"
          >
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/mail/create">
                Crear Correos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/mail/list">
                Lista Correos
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        <li>
          <DropdownButton
            style={{ margin: 0 }}
            id="dropdown-basic-button"
            title="Tipos Correos"
          >
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/mailtype/create">
                Crear Tipo Correos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/mailtype/list">
                Lista Tipo Correos
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>

        <li>
          <DropdownButton
            style={{ margin: 0 }}
            id="dropdown-basic-button"
            title="Dependencias"
          >
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/departament/create">
                Crear Dependencia
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/departament/list">
                Lista de Dependencias
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>

        <li>
          <DropdownButton
            style={{ margin: 0 }}
            id="dropdown-basic-button"
            title="Solicitudes"
          >
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/request/create">
                Crear Tipo de Solicitud
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/request/list">
                Lista Tipo de Solicitud
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        <li>
          <DropdownButton
            style={{ margin: 0 }}
            id="dropdown-basic-button"
            title="Grupos"
          >
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/group/create">
                Crear Grupos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/group/list">
                Lista de Grupos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} >
              <Link className="dropdown-item" to="/group/list/user">
                Lista de Grupos - Usuarios
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        {user && user.role === "admin" && (
          <li>
            <Link className="active" to="/users">
            Administracion
          </Link>
          </li>
        )}

        <li>
          <button onClick={logout} className="btn btn-outline-primary" >
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
