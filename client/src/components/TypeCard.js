import { useTypes } from '../context/TypeContext';
import { useNavigate } from "react-router-dom";

export default function TypeCard({ type }) {
    const { delType } = useTypes();
    const navigate = useNavigate();
    return (

        <>

            <tbody>
                <tr className='tr-table'>
                    <td>{type.tipo}</td>
                    <td>{type.done === 1 ? "✔" : "✖"}</td>
                    <td>{type.createdAt}</td>
                    <td><button onClick={() => navigate(`/mailtype/edit/${type.id}`)} className='btn btn-outline-warning'>Editar</button></td>
                    <td><button onClick={() => delType(type.id)} className='btn btn-outline-danger'>Eliminar</button></td>
                </tr>

            </tbody>


 
        </>




    )
}
