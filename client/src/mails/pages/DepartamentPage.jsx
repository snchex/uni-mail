import React, { useEffect } from "react";
import DepartCard from "../components/DepartamentCard";
import { useDeparts } from "../hooks/DepartamentProvider";

export function DepartPage() {
  const { departs, loadDepartaments } = useDeparts();

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
          <h1>No exiten Departamentos</h1>
        </div>
      );
    return departs.map((depart) => (
      <DepartCard depart={depart} key={depart.id} />
    ));
  }
  return (
    <div className="card mx-auto col-md-6">
      <h1 className="row justify-content-center py-3">
        Lista de Departamentos de Correo
      </h1>
      <div className="container mx-auto ">
        <table className="table table-borderles">
          <thead className="text-center">
            <tr className="border-bottom">
              <th>
                <span className="ml-2">Departamentos</span>
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
    </div>
  );
}

export default DepartPage;
