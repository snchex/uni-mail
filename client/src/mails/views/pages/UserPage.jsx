import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../auth/authSlice";
import UserCard from "../../components/UserCard";
import { useUsers } from "../../context/UserProvider";

export const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const { users, loadUsers } = useUsers();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getMe());
      loadUsers();
      if (isError) {
        navigate("/");
      }
      if (user && user.role !== "admin") {
        navigate("/home");
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isError, user, navigate, dispatch]);
  
  function renderMain() {
    return users.map((usuario) => (
      <UserCard usuario={usuario} key={usuario.id} />
    ));
  }
  return (
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
  );
};

export default UserPage;
