import { useContext, useState } from 'react';
import { getAllDepartaments, getDepartament, createDepartament, updateDepartament, deleteDepartament } from "../api/departamentApi";
import { DepartamentContext } from './DepartamentContext';


export const useDepartaments = () => {
    const context = useContext(DepartamentContext);
    if (context === undefined) {
        throw new Error("Departament must be used within a DepartamentProvider")
    }
    return context;

};


export const DepartamentProvider = ({ children }) => {

    const [departaments, setDepartaments] = useState([]);

    async function loadDepartaments() {
        const response = await getAllDepartaments();
        console.log(response);
        setDepartaments(response.data);
    }
    const getDpt = async (id) => {
        try {
            const response = await getDepartament(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const crDpt = async (departament) => {
        try {
            const response = await createDepartament(departament);
            console.log(response);

        } catch (error) {
            console.error(error);
        }
    }
    const upDpt = async (id, newFields) => {
        try {
            const response = await updateDepartament(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);

        }
    }
    const delDpt = async (id) => {
        try {
            const response = await deleteDepartament(id);
            setDepartaments(departaments.filter(departament => departament.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <DepartamentContext.Provider value={{ departaments, loadDepartaments, crDpt, getDpt, upDpt, delDpt }}>
            {children}
        </DepartamentContext.Provider>
    )
}

export default DepartamentProvider;