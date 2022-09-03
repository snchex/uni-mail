import { useEffect } from 'react';
import RequestCard from '../components/RequestCard'
import { useRequests } from '../context/RequestProvider';


export const RequestPage = () => {

  const { requests, loadRequests } = useRequests();


  useEffect(() => {
    const timer = setTimeout(() => {

      loadRequests();

    }, 1000);
    
    return () => clearTimeout(timer);
  });

  function renderMain() {
    if (requests.length === 0) return <div className='container'><h1>No Existen Solicitudes</h1></div>
    return requests.map(request => (<RequestCard request={request} key={request.id} />));
  }

  return (
    <>
      <h1>Lista de Solicitudes</h1>
      <table className='table table-borderles'>
          <thead className="text-center">
            <tr className="border-bottom">
                <th> <span className="mx-2">Tipo de Solicitud</span> </th>
                <th> <span className="ml-2">Accion</span> </th>
                <th> <span className="ml-2">Accion</span> </th>
            </tr>
          </thead>
        {renderMain()}
      </table>
    </>
  )
}
export default RequestPage;