import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Formm from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { useMails } from "../../context/MailProvider";
import { useDeparts, useRequests, useTypes, useGroups } from "../../context";
import nuevo from "../../../assets/nuevo.png";

export const MailForm = (values) => {
  const { gp, msg, loadMails, mails, crMail, gtMail, upMail } = useMails();
  const { departs, loadDepartaments } = useDeparts();
  const { requests, loadRequests } = useRequests();
  const { types, loadTypes } = useTypes();
  const { groups, loadGroups } = useGroups();


  //seteo de datos por defecto
  const [mail, setMail] = useState({
    user: "",
    solicitante: "Talento Humano",
    dateInicial: "",
    dateSolicitud: "",
    dateFinal: "",
    mailTypeId: "",
    requestId: "",
    departamentId: "",
    groupId: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadMail = async () => {
        if (params.id) {
          //Inyecta las datos en esas variables para mostrar
          const mail = await gtMail(params.id);

          setMail({
            user: mail.user,
            solicitante: mail.solicitante,
            dateInicial: mail.dateInicial,
            dateFinal: mail.dateFinal,
            dateSolicitud: mail.dateSolicitud,
            mailTypeId: mail.mailTypeId,
            requestId: mail.requestId,
            departamentId: mail.departamentId,
            groupId: mail.groupId,
          });
        }
      };
      loadMail();
      loadTypes();
      loadRequests();
      loadDepartaments();
      loadGroups();
      loadMails();
    }, 500);
    return () => clearTimeout(timer);
  });

  const clearInput = () => {
    if (gp === true) {
      setMail([]);
    }
  };

  //console.log(msg);
  const verMails = () => {
    navigate("/mail/list");
  };
  

  return (
    <div className="card mx-auto col-md-9">
      <h1>{params.id ? "Editar Correo" : "Nuevo Correo"}</h1>
      <p className="error pl-5">{msg}</p>
      <hr />
      <Formik
        initialValues={mail}
        enableReinitialize={true}
        validate={(values) => {
          let errores = {};
          if (!values.user) {
            errores.user = "Por favor ingrese el Correo";
          } else if (
            !/^[.a-za-z0-9]+@(?:[a-za-z0-9]+\.)+[a-za-z]+$/.test(values.user)
          ) {
            errores.user = "Por favor ingrese un Correo valido";
          } else {
            mails.map((email) => (
              <span key={email.id}>
                {email.user === values.user
                  ? (errores.user =
                      "El correo ya está en uso, escriba uno diferente")
                  : ""}
              </span>
            ));
          }

          if (!values.dateSolicitud) {
            errores.dateSolicitud = "Por favor ingrese la Fecha de Solicitud";
          }
          if (!values.dateInicial) {
            errores.dateInicial = "Por favor ingrese la Fecha de Vinculacion";
          } else if (values.dateInicial < values.dateSolicitud) {
            errores.dateInicial =
              "La Fecha de Vinculacion no puede ser anterior a la Fecha de Solicitud";
          }
          if (!values.departamentId) {
            errores.departamentId = "Por favor ingrese la Dependencia";
          }
          if (!values.requestId) {
            errores.requestId = "Por favor ingrese el tipo de Solicitud";
          }
          if (!values.mailTypeId) {
            errores.mailTypeId = "Por favor ingrese el tipo de Correo";
          }
          if (values.dateFinal && values.dateFinal < values.dateInicial) {
            errores.dateFinal =
              "La Fecha de Desvinculacion no puede ser anterior a la Fecha de Vinculacion";
          }

          return errores;
        }}
        onSubmit={async (values, actions) => {
          console.table(values);

          if (params.id) {
            console.log("Update");
            await upMail(params.id, values);
          } else {
            await crMail(values);
          }
          setMail({
            user: "",
            solicitante: "",
            dateSolicitud: "",
            dateInicial: "",
            dateFinal: "",
            mailTypeId: "",
            requestId: "",
            departamentId: "",
            groupId: "",
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
                  placeholder="Ingrese el correo"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.user}
                />
                {touched.user && errors.user && (
                  <span className="error pl-5 mx-3 ">
                    <b>{errors.user}</b>
                  </span>
                )}
              </div>

              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Tipo de Correo
                  <Formm.Select
                    name="mailTypeId"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mailTypeId}
                  >
                    <option disabled value="">
                      Seleccione
                    </option>
                    {types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.tipo}
                      </option>
                    ))}
                  </Formm.Select>
                  <span
                    type="button"
                    onClick={() => navigate(`/mailtype/create`)}
                  >
                    <img alt="nuevo" className="nuevo" src={nuevo} />
                  </span>
                  {touched.mailTypeId && errors.mailTypeId && (
                    <span className="error pl-5">{errors.mailTypeId}</span>
                  )}
                </label>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Tipo de Solicitud
                  <Formm.Select
                    name="requestId"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.requestId}
                  >
                    <img alt="nuevo" className="nuevo" src={nuevo} />
                    <option disabled value="">
                      Seleccione
                    </option>
                    {requests.map((request) => (
                      <option key={request.id} value={request.id}>
                        {request.solicitud}
                      </option>
                    ))}
                  </Formm.Select>
                  {touched.requestId && errors.requestId && (
                    <span className="error pl-5">{errors.requestId}</span>
                  )}
                </label>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Dependencia
        
                  <Formm.Select
                  name="departamentId"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.departamentId}
                  >
                     <option value="">Seleccione</option>
                    {departs.map((departament) => (
                      <option key={departament.id} value={departament.id}>
                        {departament.departamento}
                      </option>
                    ))}
                  </Formm.Select>
                  <span
                    type="button"
                    onClick={() => navigate(`/departament/create`)}
                  >
                    <img alt="nuevo" className="nuevo" src={nuevo} />
                  </span>
                  {touched.departamentId && errors.departamentId && (
                    <span className="error pl-5">{errors.departamentId}</span>
                  )}
                </label>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <tr>
                  <label className="form-control-label px-2 mx-2">
                    Fecha de Solicitud
                    <td>
                      <input
                        type="date"
                        name="dateSolicitud"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dateSolicitud}
                      />
                    </td>
                  </label>
                  <label className="form-control-label px-2 mx-2">
                    Fecha de Vinculacion
                    <td>
                      <input
                        type="date"
                        name="dateInicial"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dateInicial}
                      />
                    </td>
                  </label>
                  <label className="form-control-label px-2 mx-2">
                    Fecha de Desvinculacion
                    <td>
                      <input
                        type="date"
                        name="dateFinal"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dateFinal}
                      />
                    </td>
                  </label>
                </tr>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex ">
                <label className="form-control-label px-3">
                  Grupo
                  <Formm.Select
                    name="groupId"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.groupId}
                  >
                    <option disabled value="">
                      Seleccione
                    </option>
                    {groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.description}
                      </option>
                    ))}
                  </Formm.Select>
                  <span type="button" onClick={() => navigate(`/group/create`)}>
                    <img alt="nuevo" className="nuevo" src={nuevo} />
                  </span>
                </label>
              </div>
              <div className="messages">
                <tr>
                  <td>
                    {touched.dateSolicitud && errors.dateSolicitud && (
                      <span className="error pl-5">{errors.dateSolicitud}</span>
                    )}
                  </td>
                  <td>
                    {touched.dateInicial && errors.dateInicial && (
                      <span className="error ">{errors.dateInicial}</span>
                    )}
                  </td>

                  <td>
                    {touched.dateFinal && errors.dateFinal && (
                      <span className="error ">{errors.dateFinal}</span>
                    )}
                  </td>
                </tr>
              </div>
              <div className="form-group  px-3">
                <td>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onChange={handleChange}
                    disabled={isSubmitting}
                    onClick={clearInput}
                  >
                    {isSubmitting ? "Guardando..." : "Guardar "}
                  </button>
                </td>
                <td>
                  <button className="btn btn-warning" onClick={verMails}>
                    Ver lista
                  </button>
                </td>
              </div>
            </div>
          </Form>
        )}
        
      </Formik>
      
    </div>


  );
};
export default MailForm;
