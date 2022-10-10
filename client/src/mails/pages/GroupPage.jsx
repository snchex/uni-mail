import React, { useEffect } from "react";
import GroupCard from "../components/GroupCard";
import { useGroups } from "../hooks/GroupProvider";

export const GroupPage = () => {
  const { groups, loadGroups } = useGroups();

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
        <div className="container mx-auto ">
          <table className="table table-borderles">
            <thead className="border-bottom text-center">
              <tr>
                <th>
                  Grupo
                </th>

                <th>
                  Fecha de Vinculacion
                </th>
                <th>
                  Fecha de Desvinculacion
                </th>
                <th>
                  Accion
                </th>
                <th>
                  Accion
                </th>
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
