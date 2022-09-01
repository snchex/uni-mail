import { useEffect } from 'react';
import TypeCard from '../components/TypeCard';
import MailForm from './form/MailForm'; 
import { useTypes } from '../context/TypeProvider'

export function TypePage() {

    const { types, loadTypes } = useTypes();

    useEffect(() => {
        loadTypes();
    });


    function renderMain() {
        if (types.length === 0) return <div className='container'><h1>No exiten Tipos</h1></div>

        return (
                types.map(type => (<TypeCard type={type} key={type.id} />)),
                types.map(type => (<MailForm type={type}  />))
                
                );
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