import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav>
            
            <ul>
        
                <li><Link className='active' to="/">Inicio</Link></li>
                
                <li><Link className='active' to="/mailtype/create">Crear Tipo Correos</Link></li>
                <li><Link className='active' to="/mailtypeslist">Lista Tipo Correos</Link></li>
                <li><Link className='btn btn-outline-primary'to="/">Registrarse</Link></li>
                <li><Link className='btn btn-outline-success' to="/">Inicio Session</Link></li>
            

            </ul>

        </nav>
    </div>
  )
}
