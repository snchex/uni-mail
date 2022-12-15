import React, { useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Loader from "../../views/layouts/loader/Loader";
import { useUsers } from "../../context/UserProvider";

const UserCard = lazy(() => import('../../components/UserCard'));


export const UserPage = () => {

  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const { users, loadUsers } = useUsers();

  useEffect(() => {
    const timer = setTimeout(() => {
    
      loadUsers();
      if (isError) {
        navigate("/");
      }
      if (user && user.role !== "admin") {
        navigate("/home");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [isError, user, navigate]);
  
  function renderMain() {
    return users.map((usuario) => (
      <UserCard usuario={usuario} key={usuario.id} />
    ));
  }
  return (
    <Suspense fallback={Loader}>

      <div className="card mx-auto col-md-6">
        <h1 className="title">Usuarios</h1>
        <hr />
        <h2 className="subtitle">Lista de Usuarios</h2>
        <Link to="/users/add" className="btn btn-primary mb-2">
          Nuevo Usuario
        </Link>
        <table className="table table-borderles">
          <thead>
            <tr>
              <th>Nª</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {renderMain()}
        </table>
      </div>
    </Suspense>
  );
};

export default UserPage;
