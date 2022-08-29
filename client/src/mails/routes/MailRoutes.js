import { Route, Routes } from 'react-router-dom';

import { TypeForm, TypePage, DepartamentForm, DepartPage, RequestPage, RequestForm, GroupPage, GroupForm, Home, NotFound } from '../pages';
import { DepartamentProvider, TypeProvider, RequestProvider, GroupProvider } from '../context';

import { Navbar } from "../../ui"


export function MailRoutes() {
  return (
        <GroupProvider>
        <RequestProvider>
        <DepartamentProvider>
        <TypeProvider>
            < Navbar />
            <div className='container mx-auto py-4'>

                <Routes>
                <Route path="/" element={<Home />} />
                    
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

    
  )
}
export default MailRoutes;