import React, { useEffect } from "react";
import RequestCard from "../components/RequestCard";
import { useRequests } from "../context/RequestProvider";
import { useNavigate } from "react-router-dom"
export const RequestPage = () => {
  const { requests, loadRequests } = useRequests();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      loadRequests();
    }, 500);

    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (requests.length === 0)
      return (
        <div className="container">
          <h1>No Existen Solicitudes</h1>
        </div>
      );
    return requests.map((request) => (
      <RequestCard request={request} key={request.id} />
    ));
  }

  return (
    <div className="card mx-auto col-md-4">
      <h1 className="row justify-content-center py-3">Lista de Solicitudes</h1>
      <button
        className="btn btn-primary mx-3"
        onClick={() => navigate(`/request/create`)}
      >
        Crear Solicitudes
      </button>
      <div className="container">
        <table className="table table-borderles">
          <thead className="text-center">
            <tr className="border-bottom">
              <th>Tipo de Solicitud</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {renderMain()}
        </table>
      </div>
    </div>
  );
};
export default RequestPage;
