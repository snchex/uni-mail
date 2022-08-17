import axios from 'axios';

export const getAllTypes = async () => 
    await axios.get('http://localhost:3030/mailtypes');



export const createType = async (type) => 
    await axios.post('http://localhost:3030/mailtype/create', type);

export const updateType = async (id) => 
    await axios.put(`http://localhost:3030/mailtype/update/${id}`);


export const deleteType = async (id) => 
    await axios.delete(`http://localhost:3030/mailtype/delete/${id}`);