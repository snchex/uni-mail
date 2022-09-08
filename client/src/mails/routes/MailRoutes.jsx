import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { TypeForm, TypePage, DepartamentForm, DepartPage, RequestPage, RequestForm, GroupPage, GroupForm, MailForm, MailPage, Home, NotFound } from '../pages';
import { DepartamentProvider, TypeProvider, RequestProvider, GroupProvider, MailProvider } from '../hooks';

import { Navbar } from "../../ui"


export function MailRoutes() {
  return (
        <MailProvider >
        <GroupProvider>
        <RequestProvider>
        <DepartamentProvider>
        <TypeProvider>
            < Navbar />
            <div className='container-fluid mx-auto py-4'>

                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/mail/create" element={<MailForm />} />
                    <Route path="/mail/edit/:id" element={<MailForm />} />
                    <Route path="/mail/list" element={<MailPage />} />

                    <Route path="/mailtype/create" element={<TypeForm />} />
                    <Route path="/mailtype/edit/:id" element={<TypeForm />} />
                    <Route path="/mailtypes/list" element={<TypePage />} />


                    <Route path="/departament/create" element={<DepartamentForm />} />
                    <Route path="/departament/edit/:id" element={<DepartamentForm />} />
                    <Route path="/departament/list" element={<DepartPage />} />

                    <Route path="/request/create" element={<RequestForm />} />
                    <Route path="/request/edit/:id" element={<RequestForm />} />
                    <Route path="/request/list" element={<RequestPage />} />


                    <Route path="/group/create" element={<GroupForm />} />
                    <Route path="/group/edit/:id" element={<GroupForm />} />
                    <Route path="/group/list" element={<GroupPage />} />


                    <Route path="*" element={<NotFound />} />

                    
                </Routes>
            </div>
        </TypeProvider>
        </DepartamentProvider>
        </RequestProvider> 
        </GroupProvider>
        </MailProvider>
    
  )
}
export default MailRoutes;