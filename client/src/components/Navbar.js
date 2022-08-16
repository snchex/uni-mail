import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

        <ul>
            
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/mailtypes">Tipo Correos</Link></li>
            <li><Link to="/">Registrarse</Link></li>
            <li><Link to="/">Inicio Session</Link></li>
        

        </ul>
    </div>
  )
}
