import './App.css';
import {Route, Routes} from 'react-router-dom';
import TypeForm from './auth/pages/TypeForm';
import DepartamentForm from './auth/pages/DepartamentForm';
import DepartamentPage from './auth/pages/DepartamentPage';
import TypePage from './auth/pages/TypesPage';
import TypeContextProvider from './auth/context/TypeContextProvider';
import DepartamentProvider from './auth/context/DepartamentProvider';
import Request from './auth/pages/Request';
import NotFound from './auth/pages/NotFound';
import Home from './auth/pages/Home'
import Navbar from './auth/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './auth';

function App() {
  return (
   //<AuthProvider>
    <DepartamentProvider>
      <TypeContextProvider> 
        <Navbar/>
        
        <div className='container mx-auto py-4'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mailtype/create" element={<TypeForm/>}/>
            <Route path="/mailtype/edit/:id" element={<TypeForm/>}/>
            <Route path="/mailtypeslist" element={<TypePage/>}/>


            <Route path="/departament/create" element={<DepartamentForm/>}/>
            <Route path="/departament/edit/:id" element={<DepartamentForm/>}/>
            <Route path="/departamentlist" element={<DepartamentPage/>}/>



            <Route path="/request" element={<Request/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>

        </div>
      
      </TypeContextProvider>

    </DepartamentProvider>


    //</AuthProvider>
  );
}

export default App;
