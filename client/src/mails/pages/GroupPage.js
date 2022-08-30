import { useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import { useGroups } from '../context/GroupProvider';


export const GroupPage = () => {

  const { groups, loadGroups } = useGroups();


  useEffect(() => {
    loadGroups();
  });

  function renderMain() {
    if (groups.length === 0) return <div className='container'><h1>No Existen Grupos</h1></div>
    return groups.map(group => (<GroupCard group={group} key={group.id} />));
  }

  return (
    <>
      <h1>Lista de Grupo</h1>
      <table className='table table-borderles'>
          <thead className="text-center">
            <tr className="border-bottom">
                <th> <span class="mx-2">Grupo</span> </th>
                <th> <span class="ml-2">Responsable</span> </th>
                <th> <span class="ml-2">Miembros</span> </th>
                <th> <span class="ml-2">Accion</span> </th>
                <th> <span class="ml-2">Accion</span> </th>
            </tr>
          </thead>
      
        {renderMain()}
      </table>
    </>
  )
}
export default GroupPage;