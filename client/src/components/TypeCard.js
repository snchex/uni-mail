import {useTypes} from '../context/TypeContext';

export default function TypeCard({ type }) {
    const {delType} = useTypes();

    return (
        
        <>
           
            <tbody>
                <tr className='tr-table'>
                    <td>{type.tipo}</td>
                    <td>{type.done === 1 ? "✔" : "✖"}</td>
                    <td>{type.createdAt}</td>
                    <td><button className='btn btn-outline-warning'>Editar</button></td>
                    <td><button onClick={() => delType(type.idmailType)} className='btn btn-outline-danger'>Eliminar</button></td>
                </tr>

            </tbody>
        
        
        
        </>


        

    )
}
