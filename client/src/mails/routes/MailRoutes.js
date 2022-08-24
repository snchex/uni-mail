import { Route, Routes } from 'react-router-dom';

import { TypeForm, DepartamentForm, DepartPage, TypePage, RequestPage, Home } from '../pages';
import { DepartamentProvider, TypeProvider, RequestProvider } from '../context';

import { Navbar } from "../../ui"
import RequestForm from '../pages/form/RequestForm';

export function MailRoutes() {
  return (

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

                    
                </Routes>
            </div>
        </TypeProvider>
        </DepartamentProvider>
        </RequestProvider> 

    
  )
}
export default MailRoutes;