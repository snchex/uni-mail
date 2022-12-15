import React ,{Suspense, lazy} from "react";
import { Route, Routes } from "react-router-dom";
//import { LoginPage } from "../mails/views/pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../mails/views/layouts/loader/Loader"
//import MailRoutes from "../mails/routes/MailRoutes";

const LoginPage = lazy(() => import('../mails/views/pages/Login'))
const MailRoutes = lazy(() => import('../mails/routes/MailRoutes'))
export const AppRouter = () => {
  return (
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/*" element={<MailRoutes />} />
      
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Suspense>
  );
};

export default AppRouter;
