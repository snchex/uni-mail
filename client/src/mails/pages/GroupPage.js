import { useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import { useGroups } from '../context/GroupProvider';


export const GroupPage = () => {

  const { groups, loadGroups } = useGroups();


  useEffect(() => {
    const timer = setTimeout(() => {

      loadGroups();
    }, 500);
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (groups.length === 0) return <div className='container'><h1>No Existen Grupos</h1></div>
    return groups.map(group => (<GroupCard group={group} key={group.id} />));
  }

  return (
    <>
      <h1>Lista de Grupo</h1>


      <div className='container mx-auto'>

        <table className='table table-borderles'>
            <thead className="text-center">
              <tr className="border-bottom">
                  <th> <span className="mx-2">Grupo</span> </th>
                  <th> <span className="ml-2">Responsable</span> </th>
                  <th> <span className="ml-2">Miembros</span> </th>
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
export default GroupPage;