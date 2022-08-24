import { useEffect } from 'react';
import RequestCard from '../components/RequestCard'
import { useRequests } from '../context/RequestProvider';


export const RequestPage = () => {

  const { requests, loadRequests } = useRequests();


  useEffect(() => {
    loadRequests();
  });

  function renderMain() {
    if (requests.length === 0) return <div className='container'><h1>No Existen Solicitudes</h1></div>
    return requests.map(request => (<RequestCard request={request} key={request.id} />));
  }

  return (
    <>
      <h1>Lista de Solicitudes</h1>
      <table className='table-list'>
        {renderMain()}
      </table>
    </>
  )
}
export default RequestPage;