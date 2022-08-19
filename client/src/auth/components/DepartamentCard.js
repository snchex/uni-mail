import { useDepartaments } from "../context/DepartamentProvider";
import { useNavigate } from 'react-router-dom';


export default function DepartamentCard({ departament }){
    const { delDepartament } = useDepartaments();
    const navigate = useNavigate();



    return (
        <>
        <tbody>
            <tr className='tr-table'>
                <td>{departament.departamento}</td>
                <td>{departament.createdAt}</td>
                <td><button onClick={() => navigate(`/departament/edit/${departament.id}`)} className='btn btn-outline-warning'>Editar</button></td>
                <td><button onClick={() => delDepartament(departament.id)} className='btn btn-outline-danger'>Cancelar</button></td>
            </tr>
        </tbody>
        </>
    )



}