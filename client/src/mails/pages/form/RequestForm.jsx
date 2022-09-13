import React from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useRequests } from "../../hooks/RequestProvider";
import { useEffect, useState } from "react";

export function RequestForm() {
  const { crRequest, gtRequest, upRequest } = useRequests();

  const [request, setRequest] = useState({
    solicitud: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadRequest = async () => {
        if (params.id) {
          const request = await gtRequest(params.id);
          setRequest({
            solicitud: request.solicitud,
          });
        }
      };
      loadRequest();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const clearInput = () => {
    setRequest([]);
  };

  const verRequest = () => {
    const timer = setTimeout(() => {
      navigate("/request/list");
    }, 100);
    return () => clearTimeout(timer);
  };

  return (
    <div className="card mx-auto col-md-4">
      <h1>
        {params.id ? "Editar Tipo de Solicitud" : "Nuevo Tipo de Solicitud"}
      </h1>
      <hr />
      <Formik
        initialValues={request}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("Update");
            await upRequest(params.id, values);
            navigate("/request/list");
          } else {
            await crRequest(values);
          }
          setRequest({
            solicitud: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="form-group flex-column d-flex">
                <label className="form-control-label px-2">Solicitud</label>

                <input
                  type="text"
                  name="solicitud"
                  placeholder="Ingrese el tipo de Solicitud"
                  onChange={handleChange}
                  value={values.solicitud}
                ></input>
              </div>
              <div className="form-group  px-3">
                <td>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={verRequest}
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

export default RequestForm;
