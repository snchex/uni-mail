import axios from 'axios';


export const getAllRequests = async () =>
    await axios.get('http://localhost:3030/requests');


export const getRequest = async (id) =>
    await axios.get(`http://localhost:3030/request/${id}`);

export const createRequest = async (request) =>
    await axios.post('http://localhost:3030/request/create', request);
  

export const updateRequest = async (id, newFields) =>
    await axios.put(`http://localhost:3030/request/update/${id}`, newFields);


export const deleteRequest = async (id) =>
    await axios.delete(`http://localhost:3030/request/delete/${id}`);