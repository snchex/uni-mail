import React, { useEffect } from "react";
import DepartCard from "../components/DepartamentCard";
import { useDeparts } from "../context/DepartamentProvider";
import { useNavigate } from "react-router-dom";
export function DepartPage() {
  const { departs, loadDepartaments } = useDeparts();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      loadDepartaments();
    }, 500);
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (departs.length === 0)
      return (
        <div className="container">
          <h1>No existen Departamentos</h1>
        </div>
      );
    return departs.map((depart) => (
      <DepartCard depart={depart} key={depart.id} />
    ));
  }
  return (
    <div className="card mx-auto col-md-5">
      <h1 className="row justify-content-center py-3">
        Lista de Departamentos de Correo
      </h1>
      <button
        className="btn btn-primary mx-3 mb-2"
        onClick={() => navigate(`/departament/create`)}
      >
        Crear Departamento
      </button>
      <div className="container mx-auto ">
        <table className="table table-borderles">
          <thead className="text-center">
            <tr className="border-bottom">
              <th>Departamentos</th>
              <th>Acciones</th>
     
            </tr>
          </thead>

          {renderMain()}
        </table>
      </div>
    </div>
  );
}

export default DepartPage;
