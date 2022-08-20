
import { Route, Routes } from 'react-router-dom';

import { TypeForm, DepartamentForm, DepartPage, Home, TypePage, RequestPage, NotFound } from '../mails/pages';
import { DepartamentProvider, TypeProvider } from '../mails/context';

import { Navbar } from '../ui';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './auth';

export const AppRouter = () => {
    return (
        //<AuthProvider>
        <DepartamentProvider>
            <TypeProvider>
                <Navbar />

                <div className='container mx-auto py-4'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mailtype/create" element={<TypeForm />} />
                        <Route path="/mailtype/edit/:id" element={<TypeForm />} />
                        <Route path="/mailtypeslist" element={<TypePage />} />


                        <Route path="/departament/create" element={<DepartamentForm />} />
                        <Route path="/departament/edit/:id" element={<DepartamentForm />} />
                        <Route path="/departamentlist" element={<DepartPage />} />



                        <Route path="/request" element={<RequestPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                </div>

            </TypeProvider>

        </DepartamentProvider>


        //</AuthProvider>
    );
}

export default AppRouter;
