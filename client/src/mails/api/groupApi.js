import axios from 'axios';


export const getAllGroups = async () => 
    await axios.get('http://192.168.17.242:3030/groups');


export const getGroup = async (id) => 
    await axios.get(`http://192.168.17.242:3030/group/${id}`);


export const createGroup = async (group) => 
    await axios.post('http://192.168.17.242:3030/group/create', group);

export const updateGroup = async (id, newFields) => 
    await axios.put(`http://192.168.17.242:3030/group/update/${id}`, newFields);


export const deleteGroup = async (id) => 
    await axios.delete(`http://192.168.17.242:3030/group/delete/${id}`); 