import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Navbar() {
  return (
    <>
      <nav>

        <ul>

          <li><Link className='active' to="/">Inicio</Link></li>
          <li>
            <DropdownButton style={{ margin: 0 }} id="dropdown-basic-button" title="Tipo Correos">
              <Dropdown.Item style={{ margin: 0 }} href="#/action-1"><Link className='dropdown-item' to="/mailtype/create">Crear Tipo Correos</Link></Dropdown.Item>
              <Dropdown.Item style={{ margin: 0 }} href="#/action-2"><Link className='dropdown-item' to="/mailtypes/list">Lista Tipo Correos</Link></Dropdown.Item>
            </DropdownButton>
          </li>

          <li>
            <DropdownButton style={{ margin: 0 }} id="dropdown-basic-button" title="Departamentos">
              <Dropdown.Item style={{ margin: 0 }} href="#/action-1"><Link className='dropdown-item' to="/departament/create">Crear Departamentos</Link></Dropdown.Item>
              <Dropdown.Item style={{ margin: 0 }} href="#/action-2"><Link className='dropdown-item' to="/departament/list">Lista Departamentos</Link></Dropdown.Item>
            </DropdownButton>
          </li>

          <li>
            <DropdownButton style={{ margin: 0 }} id="dropdown-basic-button" title="Solicitudes">
              <Dropdown.Item style={{ margin: 0 }} href="#/action-1"><Link className='dropdown-item' to="/request/create">Crear Tipo de Solicitud</Link></Dropdown.Item>
              <Dropdown.Item style={{ margin: 0 }} href="#/action-2"><Link className='dropdown-item' to="/request/list">Lista Tipo de Solicitud</Link></Dropdown.Item>
            </DropdownButton>
          </li>


          <li><Link className='btn btn-outline-primary' to="/">Registrarse</Link></li>
          <li><Link className='btn btn-outline-success' to="/login">Inicio Session</Link></li>


        </ul>

      </nav>
    </>
  )
}

export default Navbar;