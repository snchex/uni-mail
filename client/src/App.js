import './App.css';
import {Route, Routes} from 'react-router-dom';
import TypePage from './pages/TypePage';
import Request from './pages/Request';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mailtypes" element={<TypePage/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    </>
  );
}

export default App;
