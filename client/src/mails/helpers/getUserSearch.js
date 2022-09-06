/*import { useMails } from '../hooks/MailProvider';
import Home from '../pages/Home';
//import { useEffect } from 'react';



export const GetUserSearch = (name = '') => {

  const { mails } = useMails();




    name = name.toLocaleLowerCase().trim();

 

  if (mails.length === 0) return [];


  return mails.filter(mail => (<Home mail={mail.name.toLocaleLowerCase().includes(name)} key={mail.id} />))
  

}
export default GetUserSearch;*/