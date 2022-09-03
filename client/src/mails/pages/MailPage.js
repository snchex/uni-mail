import { useEffect } from 'react';
import MailCard from '../components/MailCard';
import { useMails } from '../context/MailProvider';


export const MailPage = () => {

  const { mails, loadMails } = useMails();


  useEffect(() => {
    const timer = setTimeout(() => {

      loadMails();
    }, 1000);
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (mails.length === 0) return <div className='container'><h1>No Existen Correos</h1></div>
    return mails.map(mail => (<MailCard mail={mail} key={mail.id} />));
  }

  return (
    <>
      <h1>Lista de Correos</h1>
      <table className='table table-borderles'>
        <thead className="text-center">
          <tr className="border-bottom">
            <th> <span className="mx-2">Grupo</span> </th>
            <th> <span className="ml-2">Accion</span> </th>
            <th> <span className="ml-2">Accion</span> </th>
          </tr>
        </thead>
        {renderMain()}
      </table>
    </>
  )
}
export default MailPage;