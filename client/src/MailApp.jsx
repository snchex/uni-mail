import React from 'react';
import { AuthProvider } from './auth';
import AppRouter from "./router/AppRouter";
function MailApp() {
  return (
    <AuthProvider>

      <AppRouter/>
      
    </AuthProvider>
  );
}

export default MailApp;
