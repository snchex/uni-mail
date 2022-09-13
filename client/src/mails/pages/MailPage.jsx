import React, { useEffect } from "react";
import MailCard from "../components/MailCard";
import { useMails } from "../hooks/MailProvider";
//import GetUserSearch from '../helpers/getUserSearch'

export const MailPage = () => {
  const { mails, loadMails } = useMails();

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMails();
    }, 500);
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (mails.length === 0)
      return (
        <div className="container">
          <h1>No Existen Correos</h1>
        </div>
      );
    return mails.map(mail => (
      <MailCard mail={mail} key={mail.id} />
    ));
  }

  return (
    <>
      <h1 className="row justify-content-md-center py-3">Lista de Correos</h1>
      <div className="row justify-content-md-center mx-5 px-4">
        <table className="table table-borderles ">
          <thead className="text-center">
            <tr className="border-bottom">
              <th>
                <span className="ml-2">Usuario</span>
              </th>
              <th>
                <span className="ml-2">Solicitante</span>
              </th>
              <th>
                <span className="ml-2">Estado</span>
              </th>
              <th>
                <span className="ml-2">Tipo</span>
              </th>
              <th>
                <span className="ml-2">Tipo de Solicitudes</span>
              </th>
              <th>
                <span className="ml-2">Departamento</span>
              </th>
              <th>
                <span className="ml-2">Grupo</span>
              </th>
              <th>
                <span className="ml-2">Fecha de Solicitud</span>
              </th>
              <th>
                <span className="ml-2">Fecha de Vinculacion</span>
              </th>
              <th>
                <span className="ml-2">Fecha de Desvinculacion</span>
              </th>
              <th>
                <span className="ml-2">Accion</span>
              </th>
              <th>
                <span className="ml-2">Accion</span>
              </th>
            </tr>
          </thead>
          {renderMain()}
        </table>
      </div>
    </>
  );
};
export default MailPage;
