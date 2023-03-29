import axios from 'axios';

export const getAllTypes = async () => 
    await axios.get('http://localhost:3030/mailtypes');


export const getmailType = async (id) => 
    await axios.get(`http://localhost:3030/mailtype/${id}`);

export const createType = async (type) => 
    await axios.post('http://localhost:3030/mailtype/create', type);


export const updateType = async (id, newFields) => 
    await axios.put(`http://localhost:3030/mailtype/update/${id}`, newFields);


export const deleteType = async (id) => 
    await axios.delete(`http://localhost:3030/mailtype/delete/${id}`);

