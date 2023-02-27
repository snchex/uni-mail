import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useDeparts } from "../../context/DepartamentProvider";

export function DepartamentForm() {
  const { crDpt, getDpt, upDpt } = useDeparts();

  const [depart, setDepartament] = useState({
    departamento: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadDepartament = async () => {
      if (params.id) {
        const depart = await getDpt(params.id);
        setDepartament({
          departamento: depart.departamento,
        });
      }
    };
    loadDepartament();
  }, []);

  const clearInput = () => {
    setDepartament([]);
  };

  const verDepartament = () => {
    const timer = setTimeout(() => {
      navigate("/departament/list");
    }, 100);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card mx-auto col-md-4">
      <h1> {params.id ? "Editar Dependencia" : "Nueva Dependencia"}</h1>
      <hr />
      <Formik
        initialValues={depart}
        enableReinitialize={true}
        validate={(values) => {
          let errores = {};

          if (!values.departamento) {
            errores.departamento = "Por favor ingrese un departamento ";
          } else if (!/^.{2}[A-z Á-ź\s]+$/.test(values.departamento)) {
            errores.departamento = "Por favor ingrese un Departamento Valido";
          }
          return errores;
        }}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("Update");
            await upDpt(params.id, values);
            navigate("/departament/list");
          } else {
            await crDpt(values);
          }
          setDepartament({
            departamento: "",
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
                <label className="form-control-label px-2">Dependencia</label>
                <input
                  type="text"
                  name="departamento"
                  placeholder="Ingrese la dependencia"
                  onChange={handleChange}
                  value={values.departamento}
                  onBlur={handleBlur}
                />
                {touched.departamento && errors.departamento && (
                  <span className="error pl-5">{errors.departamento}</span>
                )}
              </div>

              <div className="form-group px-3">
                <td>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={verDepartament}
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
export default DepartamentForm;
