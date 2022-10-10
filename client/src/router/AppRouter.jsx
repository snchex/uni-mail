import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../mails/components/Login";

//import { MailRoutes } from "../mails";
import "bootstrap/dist/css/bootstrap.min.css";
import MailRoutes from "../mails/routes/MailRoutes";


export const AppRouter = () => {
  return (

    <>
     
          <Routes>
         
          <Route path="/*" element={<MailRoutes/>} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
    </>

    //</AuthProvider>
  );
};

export default AppRouter;
