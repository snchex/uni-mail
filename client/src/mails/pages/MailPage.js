import { useEffect } from 'react';
import MailCard from '../components/MailCard';
import { useMails } from '../context/MailProvider';


export const MailPage = () => {

  const { mails, loadMails } = useMails();


  useEffect(() => {
    loadMails ();
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