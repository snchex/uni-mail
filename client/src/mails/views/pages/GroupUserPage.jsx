import React, { useEffect, lazy, Suspense } from "react";
import Loader from "../layouts/loader/Loader";
import { useMails } from "../../context/MailProvider";
//import GroupUserCard from "../../components/GroupUserCard";
const GroupUserCard = lazy(() => import("../../components/GroupUserCard"));

export const GroupUserPage = () => {
  const { mails, loadMailUser } = useMails();

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMailUser();
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  function renderMain() {
    if (mails.group) {
      return (
        <div className="container">
          <h1>No Existen Grupos con Usuarios</h1>
        </div>
      );
    }
    return mails.map((mail) => <GroupUserCard mail={mail} key={mail.id} />);
  }

  return (
    <Suspense fallback={Loader}>
      <div className="card mx-auto col-md-7">
        <h1 className="row justify-content-center py-3">Grupos con Usuarios</h1>

        <div className="container mx-auto ">
          <table className="table table-borderles">
            <thead className="border-bottom text-center">
              <tr>
                <th>Usuarios</th>
                <th>Correo de Grupos</th>
                <th>Detalle de Grupo</th>
              </tr>
            </thead>

            {renderMain()}
          </table>
        </div>
      </div>
    </Suspense>
  );
};
export default GroupUserPage;
