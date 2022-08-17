import { deleteType } from '../api/type'

export default function TypeCard({ type }) {

    const handelDelete = async (idmailType) => {
        try {
            const response = await deleteType(idmailType);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <table>
            <tbody>

                <tr>
                    <td>{type.tipo}</td>
                    <td>{type.done === 1 ? "✔" : "✖"}</td>
                    <td>{type.createdAt}</td>
                    <td><button className='btn btn-outline-warning'>Editar</button></td>
                    <td><button onClick={() => handelDelete(type.idmailType)} className='btn btn-outline-danger'>Eliminar</button></td>
                </tr>

            </tbody>


        </table>

    )
}
