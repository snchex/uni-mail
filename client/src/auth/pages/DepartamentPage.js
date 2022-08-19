import { useEffect } from 'react';
import DepartamentCard from '../components/DepartamentCard';
import { useDepartaments } from "../context/DepartamentProvider";

function DepartamentPage() {

  const { departaments, loadDepartaments } = useDepartaments();

  useEffect(() => {
    loadDepartaments();
  });


  function renderMain() {
    if (departaments.length === 0) return <div className="container-fluid"><h1>No existen Departamentos</h1></div>
    return departaments.map(departament => (<DepartamentCard type={departament} key={departament.id} />));
  }


  return (
    <>
      <h1>Lista de Departamentos</h1>
      <table className="table-list">
        {renderMain()}
      </table>

    </>
  )
}

export default DepartamentPage;