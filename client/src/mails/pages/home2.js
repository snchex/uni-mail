import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
//import { MailCard } from '../components/MailCard';
import { useMails } from '../hooks/MailProvider';
//import {useForm } from '../hooks/useForm'

 
export const Home = () => {

  const [ mails, setMails ] = useState([])
  const [ search, setSearch ] = useState("")


  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search );
/*
  const { search, onInputChange} = useForm({
    searchText: ''
  });*/


  
/*
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (search.trim().length <= 1) return;

    navigate(`?q=${ search }`)

  }*/

  const results = !search ? mails : mails.filter((dato)=> dato.user.toLowerCase().includes(search.toLocaleLowerCase()))
  const { loadMails } = useMails();


  const showData = async () => {
    const response = await fetch(loadMails);
    const data = await response.json()

  }


  useEffect(() => {  
    const timer = setTimeout(() =>{

      showData();   
    },500);
    return () => clearTimeout(timer);
      
  })


  return (
    <>
      <div className="container">

        <div className="row">

          <div className="col-5">
              <h4> SearchPage</h4>
              <hr/>
              <form onSubmit={ onSearchSubmit }> 
                  <input type="text" className="form-control" name="search" placeholder="Search Mail" value={ search } onChange={onInputChange}/>
                  <button className="btn btn-outline-primary mt-1">
                      Buscar
                  </button>
              </form>

          </div>
          <div className="col-7">
              <h4> Resultado de Busqueda </h4>
              <hr/>
              <div className="alert alert-primary">
                 { results.map( (mail) => (
                    <tr key={mail.user}>
                        <td>{mail.statu}</td>
                        
                    </tr>                    
                ))}
              </div>
              <div className="alert alert-danger">
                  Sin Results <b>{ q }</b>
              </div>
          
          </div>    
         { /*<MailCard></MailCard>*/}

        </div>

      </div>
    
    </>
  )
}
export default Home;