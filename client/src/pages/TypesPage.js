import { useEffect } from 'react';
import TypeCard from '../components/TypeCard';
import { useTypes } from '../context/TypeContext'

function TypePage() {
    
    const { types, loadTypes } = useTypes();

    useEffect(() => {
        loadTypes();
    });


    function renderMain() {
        if(types.length === 0) return <h1>No exiten Tipos</h1>
        return types.map(type => (<TypeCard type={type} key={type.idmailType} />));
    }
    return (
        <table className='table-list'>
             <thead>
                <td>Lista de tipos de Correo</td>
            </thead>
            {renderMain()}
        
        </table>
    )       
}

export default TypePage;