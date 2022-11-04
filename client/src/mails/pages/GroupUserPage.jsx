import React, { useEffect } from "react";
import { useMails } from "../context/MailProvider";
import GroupUserCard from "../components/GroupUserCard";
import { useGroups } from "../context/GroupProvider";

export const GroupUserPage = () => {
  const { groups, loadGroups } = useGroups();
  const { mails } = useMails();

  useEffect(() => {
    const timer = setTimeout(() => {
      loadGroups();
    }, 500);
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (groups.length === 0 || mails.length === 0){

      return (
        <div className="container">
          <h1>No Existen Grupos con Usuarios</h1>
        </div>
      );
    }
    return groups.map((group) => (
      <GroupUserCard group={group} key={group.id} />
    ));
  }

  return (
    <>
      <div className="card mx-auto col-md-7">
        <h1 className="row justify-content-center py-3">Grupos con Usuarios</h1>

        <div className="container mx-auto ">
          <table className="table table-borderles">
            <thead className="border-bottom text-center">
              <tr>
                <th>Usuarios</th>
                <th>Correo de Grupos</th>
                <th>Detalle deGrupo</th>
              </tr>
            </thead>

            {renderMain()}
          </table>
        </div>
      </div>
    </>
  );
};
export default GroupUserPage;
