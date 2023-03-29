import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../../../auth/authSlice";
import logo from "../../../../assets/logo192.png";

export const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Navbar className="navegacion" expand="lg">
      <div className="container-fluid ">
        <Navbar.Brand href="/">
          <img className="logo " src={logo} alt="logo" />
          Direccion de Tecnologia, Informatica y Comunicaciones
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="active" href="/home">Inicio</Nav.Link>
            <NavDropdown title="Correos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mail/create">
                Crear Correos
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/mail/list">
                Lista de Correos
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Tipos Correos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mailtype/create">
                Crear tipos Correos
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/mailtype/list">
                Lista de Tipo Correos
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Dependencias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/departament/create">
                Crear Dependencia
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/departament/list">
                Lista de Dependencia
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Solicitudes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/request/create">
                Crear Tipo Solicicitud
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/request/list">
                Lista de Tipo Solicicitud
              </NavDropdown.Item>
            </NavDropdown>

           
            <NavDropdown title="Grupos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/group/create">
                Crear Grupos
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/group/list">
                Lista de Grupos
              </NavDropdown.Item>
              <NavDropdown.Item href="/group/list/user">
                Lista de Grupos - Usuarios
              </NavDropdown.Item>
            </NavDropdown>

            {user && user.role === "admin" && (
              <Nav.Link className="active" href="/users">Administracion</Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
              <button onClick={logout} className="btn btn-outline-primary">
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default Head;
