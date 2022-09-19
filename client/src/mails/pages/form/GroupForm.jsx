import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useGroups } from "../../hooks/GroupProvider";

export function GroupForm() {
  const { crGroup, gtGroup, upGroup } = useGroups();
  const [group, setGroup] = useState({
    name: "",
    dateInicial: "",
    dateFinal: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadGroup = async () => {
        if (params.id) {
          const group = await gtGroup(params.id);
          setGroup({
            name: group.name,
            dateInicial: group.dateInicial,
            dateFinal: group.dateFinal,
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

          if (!values.name) {
            errores.name = "Por favor ingrese el nombre del Grupo ";
          } else if (!/^.{4}[A-z\s]+$/.test(values.name)) {
            errores.name = "Por favor ingrese un Grupo Valido";
          }

          if (!values.dateInicial) {
            errores.dateInicial = "Por favor ingrese la Fecha de Vinculacion";
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
            name: "",
            dateInicial: "",
            dateFinal: "",
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
          errors
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
                    name="name"
                    onBlur={handleBlur}
                    placeholder="Ingrese el nombre de grupo"
                    onChange={handleChange}
                    value={values.name}
                  /> {touched.name && errors.name && (
                    <span className="error pl-5">{errors.name}</span>
                  )}
                </div>

                <div className="form-group flex-column d-flex">
                  <tr>
                    <label className="form-control-label mx-2">
                      Fecha de Vinculacion
                    </label>
                    <label className="form-control-label px-2 mx-4">
                      Fecha de Desvinculacion
                    </label>
                    <td>
                      <input
                        type="date"
                        onBlur={handleBlur}
                        name="dateInicial"
                        onChange={handleChange}
                        value={values.dateInicial}
                      /> {touched.dateInicial && errors.dateInicial && (
                        <span className="error pl-5">{errors.dateInicial}</span>
                      )}
                    </td>
                    <td className="px-4">
                      <input
                        type="date"
                        name="dateFinal"
                        onChange={handleChange}
                        value={values.dateFinal}
                      />
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
