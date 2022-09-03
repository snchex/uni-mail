import { useEffect } from 'react';
import TypeCard from '../components/TypeCard';
import { useTypes } from '../context/TypeProvider'

export function TypePage() {

    const { types, loadTypes } = useTypes();

    useEffect(() => {
        const timer = setTimeout(() => {

        loadTypes();
        }, 1000);
        return () => clearTimeout(timer);
    });


    function renderMain() {
        if (types.length === 0) return <div className='container'><h1>No exiten Tipos</h1></div>

        return types.map(type => (<TypeCard type={type} key={type.id} />))
    }
    return (
        <div className='row'>
            <h1>Lista de tipos de Correo</h1>
            <table className='table table-borderles '>
                <thead className="text-center">
                    <tr className="border-bottom">
                        <th> <span className="mx-2">Tipo de Correo</span> </th>
                        <th> <span className="ml-2">Accion</span> </th>
                        <th> <span className="ml-2">Accion</span> </th>
                    </tr>
                </thead>

                {renderMain()}

            </table>

        </div>
    )
}

export default TypePage;