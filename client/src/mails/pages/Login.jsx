import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset, getMe } from "../features/authSlice";
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

  console.table(user);
  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  return (
    <div className="Auth-form-container">
      <form onSubmit={Auth} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inicio Sesi&oacute;n</h3>

          {isError && <p className="error pl-5">{message}</p>}

          <div className="form-group mt-3">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="form-control mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="form-control mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
            </div>
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
