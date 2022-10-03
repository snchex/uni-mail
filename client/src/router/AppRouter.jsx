import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';
import { PublicRoute } from './PublicRoute';
import PrivateRoute  from './PrivateRoute';
import { MailRoutes } from '../mails';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './auth';
//<Route path="*" element={<NotFound />} />

export const AppRouter = () => {
    return (
        //<AuthProvider>
                //<Route path="/*" element={<MailRoutes />} />\
                //<Route path="/register" element={<RegisterPage />} />
        <>
           
            <Routes>
                
                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <MailRoutes />
                    </PrivateRoute>
                } />

            <Route path="/register" element={<RegisterPage />} />

                
            </Routes>

        </>

        //</AuthProvider>
    );
}

export default AppRouter;
