import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../mails/views/pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import MailRoutes from "../mails/routes/MailRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MailRoutes />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
