import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset, getMe } from "../../auth/authSlice";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home");
    }
    dispatch(getMe());
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  return (
    <div className="row">
      <form onSubmit={Auth} className="Auth-form-container">
        <div className="col-md-3 mx-auto ">
          <h3 className="Auth-form-title">Inicio Sesi&oacute;n</h3>


          <div className="form-group flex-column d-flex">
          {isError && <p className="error">{message}</p>}
            <label className="label">Email</label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-group flex-column d-flex">
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {isLoading ? "Loading..." : "Iniciar Sesión"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
