import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../mails/pages/LoginPage";

import { MailRoutes } from "../mails";
import "bootstrap/dist/css/bootstrap.min.css";


export const AppRouter = () => {
  return (

    <>
      <Routes>
        <Route
          path="login/*"
          element={
          <Routes>
            <Route path="/*" element={<LoginPage />} />
          </Routes>}/>
        <Route path="/*"element={<MailRoutes />}/>

        
      </Routes>
    </>

    //</AuthProvider>
  );
};

export default AppRouter;
