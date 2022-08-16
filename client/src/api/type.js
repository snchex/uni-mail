import axios from 'axios';


export const createType = async (type) => 
    await axios.post('http://localhost:3030/mailtype/create', type);
