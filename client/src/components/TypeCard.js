import React from 'react'

export default function TypeCard({ type }) {
    return (
        <div>
            <p> {type.tipo}</p>
            <span>{type.done === 1 ? "✔" : "✖"}</span>
            <span>{type.createdAt}</span>
            <td>
                <button className='btn btn-outline-warning'>Editar</button>
                <button className='btn btn-outline-danger'>Eliminar</button>
            </td>
        </div>
    )
}
