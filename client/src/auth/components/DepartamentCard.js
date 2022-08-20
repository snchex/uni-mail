import { useDeparts } from "../context/DepartamentProvider";
import { useNavigate } from 'react-router-dom';


export default function DepartCard({ depart }){
    const { delDpt } = useDeparts();
    const navigate = useNavigate();

    return (
        <>
        <tbody>
            <tr className='tr-table'>
                <td>{depart.departamento}</td>
                <td>{depart.createdAt}</td>
                <td><button onClick={() => navigate(`/departament/edit/${depart.id}`)} className='btn btn-outline-warning'>Editar</button></td>
                <td><button onClick={() => delDpt(depart.id)} className='btn btn-outline-danger'>Eliminar</button></td>
            </tr>
        </tbody>
        </>
    )



}