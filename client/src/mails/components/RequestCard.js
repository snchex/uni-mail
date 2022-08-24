import { useRequests } from "../context/RequestProvider";
import { useNavigate } from "react-router-dom";

export default function RequestCard({ request }) {
    const { delRequest } = useRequests();
    const navigate = useNavigate();

    return (
      
        <tbody>
            <tr className='tr-table'>
                <td>{request.solicitud}</td>
                <td><button onClick={() => navigate(`/request/edit/${request.id}`)} className='btn btn-outline-warning'>Editar</button></td>
                <td><button onClick={() => delRequest(request.id)} className='btn btn-outline-danger'>Eliminar</button></td>
            </tr>
        </tbody>
       
    )
}
