import './App.css';
import {Route, Routes} from 'react-router-dom';
import TypePage from './pages/TypePage';
import Request from './pages/Request';
import NotFound from './pages/NotFound';
import Home from './pages/Home'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mailtype" element={<TypePage/>}/>
      <Route path="/request" element={<Request/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
