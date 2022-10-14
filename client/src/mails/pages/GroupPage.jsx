import React, { useEffect } from "react";
import GroupCard from "../components/GroupCard";
import { useGroups } from "../context/GroupProvider";
import { useNavigate } from "react-router-dom";
export const GroupPage = () => {
  const { groups, loadGroups } = useGroups();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      loadGroups();
    }, 500);
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (groups.length === 0)
      return (
        <div className="container">
          <h1>No Existen Grupos</h1>
        </div>
      );
    return groups.map((group) => <GroupCard group={group} key={group.id} />);
  }

  return (
    <>
      <div className="card mx-auto col-md-7">
        <h1 className="row justify-content-center py-3">Lista de Grupos</h1>
        <button
        className="btn btn-primary mx-3"
        onClick={() => navigate(`/group/create`)}
      >
        Crear Grupo
      </button>
        <div className="container mx-auto ">
          <table className="table table-borderles">
            <thead className="border-bottom text-center">
              <tr>
                <th>Grupo</th>

                <th>Fecha de Vinculacion</th>
                <th>Fecha de Desvinculacion</th>
                <th>Acciones</th>
          
              </tr>
            </thead>

            {renderMain()}
          </table>
        </div>
      </div>
    </>
  );
};
export default GroupPage;
