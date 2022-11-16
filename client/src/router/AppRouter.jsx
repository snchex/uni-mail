import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../mails/pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import MailRoutes from "../mails/routes/MailRoutes";

export const AppRouter = () => {
  
  return (
    <>
      <Routes>
        <Route path="/*" element={<MailRoutes />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>

  );
};

export default AppRouter;
