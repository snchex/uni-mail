import { useEffect } from 'react';
import DepartCard from '../components/DepartamentCard';
import { useDeparts } from '../context/DepartamentProvider'

export function DepartPage() {

    const { departs, loadDepartaments } = useDeparts();

    useEffect(() => {
        loadDepartaments();
    });


    function renderMain() {
        if (departs.length === 0) return <div className='container'><h1>No exiten Departamentos</h1></div>
        return departs.map(depart => (<DepartCard depart={depart} key={depart.id} />));
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

export default DepartPage;