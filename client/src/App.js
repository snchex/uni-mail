import './App.css';
import {Route, Routes} from 'react-router-dom';
import TypeForm from './auth/pages/TypeForm';
import Request from './auth/pages/Request';
import NotFound from './auth/pages/NotFound';
import TypePage from './auth/pages/TypesPage';
import Home from './auth/pages/Home'
import Navbar from './auth/components/Navbar';
import TypeContextProvider from './auth/context/TypeContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './auth';

function App() {
  return (
   //<AuthProvider>

      <TypeContextProvider> 
        <Navbar/>
        
        <div className='container mx-auto py-4'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mailtype/create" element={<TypeForm/>}/>
            <Route path="/mailtype/edit/:id" element={<TypeForm/>}/>
            <Route path="/mailtypeslist" element={<TypePage/>}/>
            <Route path="/request" element={<Request/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>

        </div>
      
      </TypeContextProvider>


    //</AuthProvider>
  );
}

export default App;
