import axios from 'axios';

export const getAllTypes = async (req, res) => 
    await axios.get('http://localhost:3030/mailtypes')


    
export const createType = async (type) => 
    await axios.post('http://localhost:3030/mailtype/create', type);
