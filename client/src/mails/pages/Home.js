
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';


import {useForm } from '../hooks/useForm'
import GetUserSearch from '../helpers/getUserSearch';

 
export const Home = () => {


  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search );
  const mails = GetUserSearch(q)
  console.log(mails);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && mails.length === 0;

  const { searchText, onInputChange} = useForm({
    searchText: q
  });


  const onSearchSubmit = (event) => {
    event.preventDefault();


    navigate(`?q=${ searchText }`)

  }



  return (
    <>

      <div className="container">

        <div className="row">

          <div className="col-5">
              <h4> SearchPage</h4>
              <hr/>
              <form onSubmit={ onSearchSubmit }> 
                  <input type="text" className="form-control" name="searchText" autoComplete='off' placeholder="Search Mail" value={ searchText } onChange={onInputChange}/>
                  <button className="btn btn-outline-primary mt-1">
                      Buscar
                  </button>
              </form>

          </div>
          <div className="col-7">
              <h4> Resultado de Busqueda </h4>
              <hr/>
              <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
                  Search Mail
               
              </div>
              <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
                  Sin Results <b>{ q }</b>
              </div>
          
          </div>  
          { 
            mails.map( (mail) => (
                    
              <td key={mail.id} {...mail}/>
                                           
            ))
          }  
    

        </div>

      </div>
    
    </>
  )
}
export default Home;