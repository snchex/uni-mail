import React, { useEffect } from "react";
import RequestCard from "../components/RequestCard";
import { useRequests } from "../hooks/RequestProvider";

export const RequestPage = () => {
  const { requests, loadRequests } = useRequests();

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
      <div className="container">
        <table className="table table-borderles">
          <thead className="text-center">
            <tr className="border-bottom">
              <th>
                <span className="ml-1">Tipo de Solicitud</span>
              </th>
              <th>
                <span className="ml-1">Accion</span>
              </th>
              <th>
                <span className="ml-1">Accion</span>
              </th>
            </tr>
          </thead>
          {renderMain()}
        </table>
      </div>
    </div>
  );
};
export default RequestPage;
