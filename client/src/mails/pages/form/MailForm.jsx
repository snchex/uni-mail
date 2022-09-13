import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Formm from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { useMails } from "../../hooks/MailProvider";
import { useDeparts, useRequests, useTypes, useGroups } from "../../hooks";

export function MailForm() {
  const { crMail, gtMail, upMail } = useMails();
  const { departs, loadDepartaments } = useDeparts();
  const { requests, loadRequests } = useRequests();
  const { types, loadTypes } = useTypes();
  const { groups, loadGroups } = useGroups();

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
    fk_idgroup: "",
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
            fk_idtypeMail: mail.fk_idtypeMail,
            fk_idrequest: mail.fk_idrequest,
            fk_iddepartament: mail.fk_iddepartament,
            fk_idgroup: mail.fk_idgroup,
          });
        }
      };
      loadMail();
      loadTypes();
      loadRequests();
      loadDepartaments();
      loadGroups();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const clearInput = () => {
    setMail([]);
  };
  const verMails = () => {
    navigate("/mail/list");
  };
  return (
    <div className="card mx-auto col-md-9">
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

          if (!values.dateInicial) {
            errores.dateInicial = "Por favor ingrese la Fecha de Vinculacion";
          }
          if (!values.dateSolicitud) {
            errores.dateSolicitud = "Por favor ingrese la Fecha de Solicitud";
          }
          if (!values.fk_iddepartament) {
            errores.fk_iddepartament = "Por favor ingrese el departamento";
          }
          if (!values.fk_idrequest) {
            errores.fk_idrequest = "Por favor ingrese el tipo de Solicitud";
          }
          if (!values.fk_idtypeMail) {
            errores.fk_idtypeMail = "Por favor ingrese el tipo de Correo";
          }
          if (!values.fk_idgroup) {
            errores.fk_idgroup = "Por favor ingrese al grupo que pertenezca";
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
                  <span className="error pl-5">{errors.user}</span>
                )}
              </div>

              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Tipo de Correo
                  <Formm.Select onChange={handleChange} name="fk_idtypeMail">
                    <option disabled selected value="">
                      {" "}
                      Seleccione
                    </option>
                    {types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.tipo}
                      </option>
                    ))}
                  </Formm.Select>
                  {touched.fk_idtypeMail && errors.fk_idtypeMail && (
                    <span className="error pl-5">{errors.fk_idtypeMail}</span>
                  )}
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
                    <option disabled selected value="">
                      Seleccione
                    </option>
                    {requests.map((request) => (
                      <option key={request.id} value={request.id}>
                        {request.solicitud}
                      </option>
                    ))}
                  </Formm.Select>
                  {touched.fk_idrequest && errors.fk_idrequest && (
                    <span className="error pl-5">{errors.fk_idrequest}</span>
                  )}
                </label>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3">
                  Departamento
                  <Formm.Select
                    name="fk_iddepartament"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <option disabled selected value="">Seleccione</option>
                    {departs.map((departament) => (
                      <option key={departament.id} value={departament.id}>
                        {departament.departamento}
                      </option>
                    ))}
                  </Formm.Select>
                  {touched.fk_iddepartament && errors.fk_iddepartament && (
                    <span className="error pl-5">
                      {errors.fk_iddepartament}
                    </span>
                  )}
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
                    {touched.dateSolicitud && errors.dateSolicitud && (
                      <span className="error pl-5">{errors.dateSolicitud}</span>
                    )}
                  </td>
                  <td className="px-4">
                    <input
                      type="date"
                      name="dateInicial"
                      onChange={handleChange}
                      value={values.dateInicial}
                    />
                    {touched.dateInicial && errors.dateInicial && (
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
              <div className="form-group col-sm-6 flex-column d-flex ">
                <label className="form-control-label px-3">
                  Departamento
                  <Formm.Select
                    name="fk_idgroup"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <option disabled selected value="">
                      {" "}
                      Seleccione
                    </option>
                    {groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </Formm.Select>
                  {touched.fk_idgroup && errors.fk_idgroup && (
                    <span className="error pl-5">{errors.fk_idgroup}</span>
                  )}
                </label>
              </div>
              <div className="form-group  px-3">
                <td>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={verMails}
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
export default MailForm;
