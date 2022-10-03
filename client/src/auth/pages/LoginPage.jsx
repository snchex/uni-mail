/*import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/home";

    login("Javier");

    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="Auth-form-container">
      <Formik enableReinitialize={true}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Inicio Sesi&oacute;n</h3>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    onClick={onLogin}
                  >
                    Inicio Sesi&oacute;n
                  </button>
                </div>
                <p className="forgot-password text-right mt-2">
                  Forgot <Link to="#">password?</Link>
                </p>
              </div>
            </form>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
*/