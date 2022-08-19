import { useEffect } from 'react';
import TypeCard from '../components/TypeCard';
import { useTypes } from '../context/TypeContextProvider'

function TypePage() {
    
    const { types, loadTypes } = useTypes();

    useEffect(() => {
        loadTypes();
    });


    function renderMain() {
        if (types.length === 0) return <div className='container'><h1>No exiten Tipos</h1></div>
        return types.map(type => (<TypeCard type={type} key={type.id} />));
    }
    return (
        <>
            <h1>Lista de tipos de Correo</h1>
            <table className='table-list'>
               
                {renderMain()}
            
            </table>

        </>
    )       
}

export default TypePage;