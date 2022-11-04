import React, { useEffect } from "react";
import MailCard from "../components/MailCard";
import { useMails } from "../context/MailProvider";
import { useNavigate } from "react-router-dom";
import GroupUserCard from "../components/GroupUserCard";
export const MailPage = () => {
  const { mails, loadMails } = useMails();
  const navigate = useNavigate();
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
    return (
      mails.map((mail) => <MailCard mail={mail} key={mail.id} />),
      mails.map((mail) => <GroupUserCard mail={mail} key={mail.id} />)
      
      
      )

  }

  return (
    <div className="card mx-auto col-md-11">
      <h1 className="row justify-content-md-center py-3">Lista de Correos</h1>
      <div className="row justify-content-md-center mx-auto">
        <button
          className="btn btn-primary mx-auto"
          onClick={() => navigate(`/mail/create`)}
        >
          Crear Mail
        </button>
        <table className="table table-borderles ">
          <thead className="text-center">
            <tr className="border-bottom">
              <th>Usuario</th>
              <th>Solicitante</th>
              <th>Tipo</th>
              <th>Tipo de Solicitudes</th>
              <th>Departamento</th>
              <th>Grupo</th>
              <th>Fecha de Solicitud</th>
              <th>Fecha de Vinculacion</th>
              <th>Fecha de Desvinculacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {renderMain()}
        </table>
      </div>
    </div>
  );
};
export default MailPage;
