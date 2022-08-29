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
      
        {renderMain()}
      </table>
    </>
  )
}
export default GroupPage;