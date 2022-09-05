import { useEffect } from 'react';
import DepartCard from '../components/DepartamentCard';
import { useDeparts } from '../context/DepartamentProvider'

export function DepartPage() {

    const { departs, loadDepartaments } = useDeparts();

    useEffect(() => {
        const timer = setTimeout(() => {

            loadDepartaments();
        }, 500);
        return () => clearTimeout(timer);
    });


    function renderMain() {
        if (departs.length === 0) return <div className='container'><h1>No exiten Departamentos</h1></div>
        return departs.map(depart => (<DepartCard depart={depart} key={depart.id} />));
    }
    return (
        <>
            <h1>Lista de Departamentos de Correo</h1>
            <div className='container mx-auto'>

                <table className='table table-borderles'>
                    <thead className="text-center">
                        <tr className="border-bottom">
                            <th> <span className="ml-2">Departamentos</span> </th>
                            <th> <span className="ml-2">Accion</span> </th>
                            <th> <span className="ml-2">Accion</span> </th>
                        </tr>
                    </thead>

                    {renderMain()}
    
                </table>
            </div>

        </>
    )
}

export default DepartPage;