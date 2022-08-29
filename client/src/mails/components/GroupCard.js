import { useGroups }  from "../context/GroupProvider";
import { useNavigate } from "react-router-dom";

export default function GroupCard({ group }) {
    const { delGroup } = useGroups();
    const navigate = useNavigate();

    return (
        <>
            <thead className="text-center">
                <tr className="border-bottom">
                    <th> <span class="mx-2">Grupo</span> </th>
                    <th> <span class="ml-2">Responsable</span> </th>
                    <th> <span class="ml-2">Miembros</span> </th>
                    <th> <span class="ml-2">Accion</span> </th>
                    <th> <span class="ml-2">Accion</span> </th>
                  
                </tr>
            </thead>
      
        <tbody className='text-center mx-auto'>
            <tr>
                <td className='ml-2'>{group.name}</td>
                <td className="ml-2">{group.responsible}</td>
                <td className="ml-2">{group.member}</td>
                
                <td><button onClick={() => navigate(`/group/edit/${group.id}`)} className='btn btn-outline-warning'>Editar</button></td>
                <td><button onClick={() => delGroup(group.id)} className='btn btn-outline-danger'>Eliminar</button></td>
            </tr>
        </tbody>
        
        </>
       
    )
}
