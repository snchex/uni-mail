import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const onLogout = () => {
    logout();
    navigate("/", {
      replace: true,
    });
  };

  return (
   
    <nav>
      <ul>
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
            <Dropdown.Item style={{ margin: 0 }} href="#/action-1">
              <Link className="dropdown-item" to="/mail/create">
                Crear Correos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} href="#/action-2">
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
            <Dropdown.Item style={{ margin: 0 }} href="#/action-1">
              <Link className="dropdown-item" to="/mailtype/create">
                Crear Tipo Correos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} href="#/action-2">
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
            title="Departamentos"
          >
            <Dropdown.Item style={{ margin: 0 }} href="#/action-1">
              <Link className="dropdown-item" to="/departament/create">
                Crear Departamentos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} href="#/action-2">
              <Link className="dropdown-item" to="/departament/list">
                Lista Departamentos
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
            <Dropdown.Item style={{ margin: 0 }} href="#/action-1">
              <Link className="dropdown-item" to="/request/create">
                Crear Tipo de Solicitud
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} href="#/action-2">
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
            <Dropdown.Item style={{ margin: 0 }} href="#/action-1">
              <Link className="dropdown-item" to="/group/create">
                Crear Grupos
              </Link>
            </Dropdown.Item>
            <Dropdown.Item style={{ margin: 0 }} href="#/action-2">
              <Link className="dropdown-item" to="/group/list">
                Lista de Grupos
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>

        <li>
          <Link onClick={onLogout} className="btn btn-outline-primary" to="/">
            Salir
          </Link>
        </li>
        <li>
          <Link className="btn btn-outline-success" to="/">
            { user.name !== "" ? user.name : "Iniciar"}
          </Link>
        </li>
      </ul>
    </nav>
   
  );
};
export default Navbar;
