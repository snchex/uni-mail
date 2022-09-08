import React from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useGroups } from "../../hooks/GroupProvider";
import { useEffect, useState } from "react";

export function GroupForm() {
  const { crGroup, gtGroup, upGroup } = useGroups();

  const [group, setGroup] = useState({
    name: "",
    responsible: "",
    member: "",
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
            responsible: group.responsible,
            member: group.member,
          });
        }
      };
      loadGroup();
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
            responsible: "",
            member: "",
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
                  <label className="form-control-label px-3">Responsable</label>
                  <input
                    type="text"
                    name="responsible"
                    placeholder="Ingrese el responsable"
                    onChange={handleChange}
                    value={values.responsible}
                  ></input>
                </div>

                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Miembros</label>
                  <input
                    type="text"
                    name="member"
                    placeholder="Ingrese los miembros"
                    onChange={handleChange}
                    value={values.member}
                  ></input>
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
