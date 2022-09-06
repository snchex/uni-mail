import { useEffect } from 'react';
import TypeCard from '../components/TypeCard';
import { useTypes } from '../hooks/TypeProvider'

export function TypePage() {

    const { types, loadTypes } = useTypes();

    useEffect(() => {
        const timer = setTimeout(() => {

        loadTypes();
        }, 500);
        return () => clearTimeout(timer);
    });


    function renderMain() {
        if (types.length === 0) return <div className='container'><h1>No exiten Tipos</h1></div>

        return types.map(type => (<TypeCard type={type} key={type.id} />))
    }
    return (
        <>
        
            <h1 className='row justify-content-center py-3'>Lista de tipos de Correo</h1>
            <div className='container mx-auto col-md-4'>
                <table className='table table-borderles '>
                    <thead className="text-center">
                        <tr className="border-bottom">
                            <th> <span >Tipo de Correo</span> </th>
                            <th> <span >Accion</span> </th>
                            <th> <span >Accion</span> </th>
                        </tr>
                    </thead>

                    {renderMain()}

                </table>

            </div>
        
        </>
    )
}

export default TypePage;