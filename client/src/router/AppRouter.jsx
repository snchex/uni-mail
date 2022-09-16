import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';

import { MailRoutes } from '../mails';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './auth';
//<Route path="*" element={<NotFound />} />

export const AppRouter = () => {
    return (
        //<AuthProvider>
        <>
           
            <Routes>
                
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<MailRoutes />} />

                
            </Routes>

        </>

        //</AuthProvider>
    );
}

export default AppRouter;
