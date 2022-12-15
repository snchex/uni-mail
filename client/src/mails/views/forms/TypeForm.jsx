import React from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useTypes } from "../../context/TypeProvider";
import { useEffect, useState } from "react";

export function TypeForm() {
  const { crType, getType, upType } = useTypes();
  const [type, setType] = useState({
    tipo: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadType = async () => {
        if (params.id) {
          const type = await getType(params.id);
          setType({
            tipo: type.tipo,
          });
        }
      };
      loadType();
    }, 200);
    return () => clearTimeout(timer);
  });

  const clearInput = () => {
    setType([]);
  };
  const verType = () => {
    const timer = setTimeout(() => {
      navigate("/mailtype/list");
    }, 200);
    return () => clearTimeout(timer);
  };
  return (
    <div className="card mx-auto col-md-4">
      <h1> {params.id ? "Editar Tipo Correo" : "Nuevo Tipo de Correo"}</h1>
      <hr />
      <Formik
        initialValues={type}
        enableReinitialize={true}
        validate={(values) => {
          let errores = {};

          if (!values.tipo) {
            errores.tipo = "Por favor ingrese un tipo de Correo";
          } else if (!/^.{3}[A-z]+$/.test(values.tipo)) {
            errores.tipo = "Por favor ingrese un tipo Valido";
          }
          return errores;
        }}

        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            console.log("Update");
            await upType(params.id, values);
            navigate("/mailtype/list");
          } else {
            await crType(values);
          }
          setType({
            tipo: "",
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
            <div className="row justify-content-center text-left">
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-2">
                  Tipo de Correo
                </label>
                < input
                  type="text"
                  name="tipo"
                  placeholder="Ingrese el tipo de Correo"
                  onChange={handleChange}
                  value={values.tipo}
                  onBlur={handleBlur}
                />
                {touched.tipo && errors.tipo && (
                  <span className="error pl-5">{errors.tipo}</span>
                )}
              </div>
              <div className="form-group  px-3">
                <td>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={verType}
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
export default TypeForm;
