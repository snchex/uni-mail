import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useGroups } from "../../context/GroupProvider";

export function GroupForm() {
  const { crGroup, gtGroup, upGroup } = useGroups();
  const [group, setGroup] = useState({
    description: "",
    dateInicialG: "",
    dateFinalG: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadGroup = async () => {
        if (params.id) {
          const group = await gtGroup(params.id);
          setGroup({
            description: group.description,
            dateInicialG: group.dateInicialG,
            dateFinalG: group.dateFinalG, 
          });
        }
      };
      loadGroup();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const clearInput = () => {
    setGroup([]);
  };

  const verGroup = () => {
    const timer = setTimeout(() => {
      navigate("/group/list");
    }, 100);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card mx-auto col-md-4">
      <h1>{params.id ? "Editar Tipo de Grupo" : "Nuevo Tipo de Grupo"}</h1>
      <hr />
      <Formik
        initialValues={group}
        enableReinitialize={true}
        validate={(values) => {
          let errores = {};

          if (!values.description) {
            errores.description = "Por favor ingrese el nombre del Grupo ";
          } else if (!/^.{2}[A-z\s]+$/.test(values.description)) {
            errores.description = "Por favor ingrese un Grupo Valido";
          }

          if (!values.dateInicialG) {
            errores.dateInicialG = "Por favor ingrese la Fecha de Vinculacion";
          }
          return errores;
        }}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("Update");
            await upGroup(params.id, values);
            navigate("/group/list");
          } else {
            await crGroup(values);
          }

          setGroup({
            description: "",
            dateInicialG: "",
            dateFinalG: "",
          });
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          isSubmitting,
          touched,
          handleBlur,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="container-fluid mx-auto px-5">
                <div className="form-group  flex-column d-flex">
                  <label className="form-control-label px-3">
                    Nombre de Grupo
                  </label>
                  <input
                    type="text"
                    name="description"
                    onBlur={handleBlur}
                    placeholder="Ingrese el nombre de grupo"
                    onChange={handleChange}
                    value={values.description}
                  />{" "}
                  {touched.description && errors.description && (
                    <span className="error pl-5">{errors.description}</span>
                  )}
                </div>

                <div className="form-group flex-column d-flex">
                  <tr>
                    <td>
                      <label className="form-control-label mx-2">
                        Fecha de Vinculacion
                        <input
                          type="date"
                          onBlur={handleBlur}
                          name="dateInicialG"
                          onChange={handleChange}
                          value={values.dateInicialG}
                        />{" "}
                      </label>
                        {touched.dateInicialG && errors.dateInicialG && (
                          <span className="error pl-5">
                            {errors.dateInicialG}
                          </span>
                        )}
                    </td>
                    <td>
                      <label className="form-control-label px-2 mx-4">
                        Fecha de Desvinculacion
                        <input
                          type="date"
                          name="dateFinalG"
                          onChange={handleChange}
                          value={values.dateFinalG}
                        />
                      </label>
                    </td>
                  </tr>
                </div>

                <div className="form-group  px-3">
                  <td>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={verGroup}
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GroupForm;
