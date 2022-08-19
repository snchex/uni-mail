import axios from 'axios';


export const getAllDepartaments = async () => 
    await axios.get('http://localhost:3030/departaments');


export const getDepartament = async (id) => 
    await axios.get(`http://localhost:3030/departament/${id}`);


export const createDepartament = async (departament) => 
    await axios.post('http://localhost:3030/departament/create', departament);

export const updateDepartament = async (id, newFields) => 
    await axios.put(`https//localhost:3030/departament/update/${id}`, newFields);


export const deleteDepartament = async (id) => 
    await axios.delete(`http://localhost:3030/departament/delete${id}`);