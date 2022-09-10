import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Formm from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { useMails } from "../../hooks/MailProvider";
import { useDeparts, useRequests, useTypes } from "../../hooks";

export function MailForm() {
  const { crMail, gtMail, upMail } = useMails();
  const { departs, loadDepartaments } = useDeparts();
  const { requests, loadRequests } = useRequests();
  const { types, loadTypes } = useTypes();

  const [mail, setMail] = useState({
    user: "",
    solicitante: "Talento Humano",
    dateInicial: "",
    dateSolicitud: "",
    dateFinal: "",
    statu: 0,
    fk_idtypeMail: "",
    fk_idrequest: "",
    fk_iddepartament: "",
    
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadMail = async () => {
        if (params.id) {
          const mail = await gtMail(params.id);
          setMail({
            user: mail.user,
            solicitante: mail.solicitante,
            dateInicial: mail.dateInicial,
            dateFinal: mail.dateFinal,
            dateSolicitud: mail.dateSolicitud,
            statu: mail.statu,
            fk_idtypeMail: mail.tipo,
            fk_idrequest: mail.solicitud,
            fk_iddepartament: mail.departamento,
            
          });
        }
      };
      loadMail();
      loadTypes();
      loadRequests();
      loadDepartaments();
      }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="card">
      <h1>{params.id ? "Editar Correo" : "Nuevo Correo"}</h1>
      <hr />
      <Formik
        initialValues={mail}
        enableReinitialize={true}
        validate={(values) => {
          let errores = {};

          if (!values.user) {
            errores.user = "Por favor ingrese su usuario";
          } else if (
            !/^[.a-za-z0-9]+@(?:[a-za-z0-9]+\.)+[a-za-z]+$/.test(values.user)
          ) {
            errores.user = "Por favor ingrese un correo valido";
          }
          return errores;
        }}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("Update");
            await upMail(params.id, values);
            navigate("/mail/list");
          } else {
            await crMail(values);
          }
          navigate("/mail/list");
          setMail({
            user: "",
            solicitante: "",
            dateSolicitud: "", 
            dateInicial: "",
            dateFinal: "",
            statu: "",
            fk_idtypeMail: "",
            fk_idrequest: "",
            fk_iddepartament: "",
            
          });
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">Usuario</label>
                <input
                  className="inputUser"
                  type="text"
                  name="user"
                  autoFocus={true}
                  placeholder="Ingrese el correo"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.user}
                />
                {touched.user && errors.user && (
                  <div className="error pl-5">{errors.user}</div>
                )}
              </div>
              
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Tipo de Correo
                  <Formm.Select onChange={handleChange} name="fk_idtypeMail">
                    <option value="">Seleccione</option>
                    {types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.tipo}
                      </option>
                    ))}
                  </Formm.Select>
                </label>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Tipo de Solicitud
                  <Formm.Select
                    name="fk_idrequest"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione</option>
                    {requests.map((request) => (
                      <option key={request.id} value={request.id}>
                        {request.solicitud}
                      </option>
                    ))}
                  </Formm.Select>
                </label>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Departamento
                  <Formm.Select name="fk_iddepartament" onChange={handleChange}>
                    <option value="">Seleccione</option>
                    {departs.map((departament) => (
                      <option key={departament.id} value={departament.id}>
                        {departament.departamento}
                      </option>
                    ))}
                  </Formm.Select>
                </label>
              </div>
          
             
              <div className="form-group col-sm-6 flex-column d-flex">
                <tr>
                <label className="form-control-label px-2 mx-1">
                    Fecha de Solicitud
                  </label>
                  <label className="form-control-label px-3 mx-4">
                    Fecha de Vinculacion
                  </label>
                  <label className="form-control-label  px-2 mx-2">
                    Fecha de Desvinculacion
                  </label>
                  <td>
                    <input
                      type="date"
                      name="dateSolicitud"
                      onChange={handleChange}
                      value={values.dateSolicitud}
                    />
                  </td>
                  <td className="px-4">
                    <input
                      type="date"
                      name="dateInicial"
                      onChange={handleChange}
                      value={values.dateInicial}
                    />
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
              <div className="form-group lex-column d-flex ">
                <label className="form-control-label px-3">
                  Activo
                  <Formm.Check
                    label="S&iacute;"
                    className="mb-2"
                    name="statu"
                    aria-label="option 1"
                    onChange={handleChange}
                    value={1}
                  />
                </label>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Guardando..." : "Guardar"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default MailForm;
