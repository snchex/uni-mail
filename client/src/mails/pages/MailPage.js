import { useEffect } from 'react';
import MailCard from '../components/MailCard';
import { useGroups } from '../context/GroupProvider';


export const MailPage = () => {

  const { mails, loadGroups } = useGroups();


  useEffect(() => {
    loadGroups();
  });

  function renderMain() {
    if (mails.length === 0) return <div className='container'><h1>No Existen Correos</h1></div>
    return mails.map(mail => (<MailCard mail={mail} key={mail.id} />));
  }

  return (
    <>
      <h1>Lista de Correos</h1>
      <table className='table table-borderles'>
        {renderMain()}
      </table>
    </>
  )
}
export default MailPage;