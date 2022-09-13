import React from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useDeparts } from "../../hooks/DepartamentProvider";
import { useEffect, useState } from "react";

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
  });

  const clearInput = () => {
    setDepartament([]);
  };
  const verDepartament = () => {
    navigate("/departament/list");
  };
  return (
    <div className="card mx-auto col-md-4">
      <h1> {params.id ? "Editar Departamento" : "Nuevo Departamento"}</h1>
      <hr />
      <Formik
        initialValues={depart}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

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
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-2">Departamento</label>

                <input
                  type="text"
                  name="departamento"
                  placeholder="Ingrese el departamento"
                  onChange={handleChange}
                  value={values.departamento}
                ></input>
               
              </div>
            
              <div className="form-group px-3">
                  <td>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={verDepartament}
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
export default DepartamentForm;
