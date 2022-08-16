import  { useEffect, useState } from 'react';
import { getAllTypes } from '../api/type.js';
import TypeCard from '../components/TypeCard.js';

export default function TypePage() {

    const [ types, setTypes ] = useState([])
    useEffect(() => {
        async function loadTypes() {
            const response =  await getAllTypes();
            setTypes(response.data);
        }
        loadTypes();
    }, [])

    return (
        <div className='card-list'>
            <p> <h1>Lista de tipos de Correo</h1> </p>
            {
                types.map(type => (
                   <TypeCard type={type} key={type.id} />
                )) 
            }
        </div>
    )
}