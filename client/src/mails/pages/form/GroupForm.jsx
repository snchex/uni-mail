import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useGroups } from "../../hooks/GroupProvider";
import { useMails } from "../../hooks";

export function GroupForm() {
  const { crGroup, gtGroup, upGroup } = useGroups();
  const { mails, loadMails } = useMails();
  const [group, setGroup] = useState({
    name: "",
  
    dateInicial: "",
    dateFinal: "",
    fk_idmail: "",
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
           
            fk_idmail: group.fk_idmail,
            dateInicial: group.dateInicial,
            dateFinal: group.dateFinal,
          });
        }
      };
      loadGroup();
      loadMails();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <h1>{params.id ? "Editar Tipo de Grupo" : "Nuevo Tipo de Grupo"}</h1>
      <Formik
        initialValues={group}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log("Update");
            await upGroup(params.id, values);
            navigate("/group/list");
          } else {
            await crGroup(values);
            navigate("/group/list");
          }
          setGroup({
            name: "",
     
            fk_idmail: "",
            dateInicial: "",
            dateFinal: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row justify-content-center text-left">
              <div className="container-fluid mx-auto px-5">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Departamento
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ingrese el nombre de grupo"
                    onChange={handleChange}
                    value={values.name}
                  ></input>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Miembros</label>
                    {mails.map(mail => (
                      <checkbox
                      label="S&iacute;"
                      className="mb-2"
                      name="statu"
                      aria-label="option 1"
                      key={mail.id}
                      onChange={handleChange}
                      value={mail.id}
                    />
                    ))}



                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <tr>
                    <label className="form-control-label mx-2">
                      Fecha de Vinculacion
                    </label>
                    <label className="form-control-label  mx-4">
                      Fecha de Desvinculacion
                    </label>
                    <td className="">
                      <input
                        type="date"
                        name="dateInicial"
                        onChange={handleChange}
                        value={values.dateInicial}
                      />
                    </td>
                    <td className="px-5">
                      <input
                        type="date"
                        name="dateFinal"
                        onChange={handleChange}
                        value={values.dateFinal}
                      />
                    </td>
                  </tr>
                </div>

             
                <div className="form-group col-sm-6 flex-column d-flex">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Guardando..." : "Guardar"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default GroupForm;
