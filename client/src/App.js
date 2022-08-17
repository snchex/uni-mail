import './App.css';
import {Route, Routes} from 'react-router-dom';
import TypeForm from './pages/TypeForm';
import Request from './pages/Request';
import NotFound from './pages/NotFound';
import TypePage from './pages/TypesPage';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import TypeContextProvider from './context/TypeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TypeContextProvider> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mailtypes" element={<TypeForm/>}/>
        <Route path="/mailtypeslist" element={<TypePage/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    </TypeContextProvider>
  );
}

export default App;
