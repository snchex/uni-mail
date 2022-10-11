
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Formm from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../../context/UserProvider";


export function UserForm() {
  const { crUser, gtUser, upUser } = useUsers();
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    role: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadUser = async () => {
        if (params.id) {
          const user = await gtUser(params.id);
          setUser({
            name: user.name,
            email: user.email,
            password: user.password,
            confPassword: user.confPassword,
            role: user.role,
          });
        }
      };
      loadUser();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const clearInput = () => {
    setUser([]);
  };

  const verUser = () => {
    const timer = setTimeout(() => {
      navigate("/users");
    }, 100);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card mx-auto col-md-4">
      <h1>{params.id ? "Editar Usuario" : "Nuevo Usuario"}</h1>
      <hr />
      <Formik
        initialValues={user}
        enableReinitialize={true}
        validate={(values) => {
          let errores = {};

          if (!values.name) {
            errores.name = "Por favor ingrese su nombre ";
          } else if (!/^.{2}[A-z\s]+$/.test(values.name)) {
            errores.name = "Por favor ingrese un nombre Valido";
          }

          if (!values.email) {
            errores.email = "Por favor ingrese el Correo";
          } else if (
            !/^[.a-za-z0-9]+@(?:[a-za-z0-9]+\.)+[a-za-z]+$/.test(values.email)
          ) {
            errores.email = "Por favor ingrese un Correo valido";
          }
          return errores;
        }}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("Update");
            try {
                await upUser(params.id, values);
               
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                    console.log(error.response);
                  }
            }
            
          } else {
            try {
                await crUser(values);
                
            } catch (error) {
              if (error.response) {
                setMsg(error.response.data.msg);
                console.log(error.response);
              }
            }
          }
          setUser({
            name: "",
            email: "",
            password: "",
            confPassword: "",
            role: "",
          });
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
             <p className="error pl-5">{msg}</p>
            <div className="row justify-content-center text-left">
              <div className="form-group flex-column d-flex">
             
                <label className="form-control-label px-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ingrese el nombre"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && (
                  <span className="error pl-5">{errors.name}</span>
                )}
              </div>
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-2">Correo</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Ingrese el correo"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <span className="error pl-5">{errors.email}</span>
                )}
              </div>
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-2">Password</label>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Ingrese el password"
                  value={values.password}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group flex-column d-flex">
                <label className="label">Confirm Password</label>

                <input
                  type="password"
                  name="confPassword"
                  onChange={handleChange}
                  placeholder="Repita el password"
                  value={values.confPassword}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group flex-column d-flex">
                <Formm.Select onChange={handleChange}>
                  <option disabled selected value="">
                    Seleccione
                  </option>
                  <option value={values.role="admin"}>admin</option>
                  <option value={values.role="user"}>user</option>
                </Formm.Select>
              </div>

              <div className="form-group  px-3">
                <td>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={verUser}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Guardando..." : "Guardar y Ver"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={clearInput}
                  >
                    {isSubmitting ? "Guardando..." : "Guardar y Continuar"}
                  </button>
                </td>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
