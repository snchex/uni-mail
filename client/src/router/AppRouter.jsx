import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';

import { MailRoutes } from '../mails';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './auth';
//<Route path="*" element={<NotFound />} />

export const AppRouter = () => {
    return (
        //<AuthProvider>
        <>
           
            <Routes>
                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<MailRoutes />} />

                
            </Routes>

        </>

        //</AuthProvider>
    );
}

export default AppRouter;
