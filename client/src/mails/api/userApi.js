import axios from 'axios';


export const getAllUsers = async () => 
    await axios.get('http://localhost:3030/users');


export const getUser = async (id) => 
    await axios.get(`http://localhost:3030/user/${id}`);


export const createUser = async (user) => 
    await axios.post('http://localhost:3030/user/create', user);

export const updateUser = async (id, newFields) => 
    await axios.put(`http://localhost:3030/user/update/${id}`, newFields);


export const deleteUser = async (id) => 
    await axios.delete(`http://localhost:3030/user/delete/${id}`);