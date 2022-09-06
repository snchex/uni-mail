import { useContext, useState } from 'react';
import { getAllDepartaments, getDepartament, createDepartament, updateDepartament, deleteDepartament } from "../../mails/api/departamentApi";
import { DepartamentContext } from '../context/DepartamentContext';


export const useDeparts = () => {
    const context = useContext(DepartamentContext);
    if (context === undefined) {
        throw new Error("Departament must be used within a DepartamentProvider")
    }
    return context;

};


export const DepartamentProvider = ({ children }) => {

    const [departs, setDepartaments] = useState([]);

    async function loadDepartaments() {
        const response = await getAllDepartaments();
        //console.log(response.data);
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

    const crDpt = async (depart) => {
        try {
            const response = await createDepartament(depart);
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
            setDepartaments(departs.filter(depart => depart.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <DepartamentContext.Provider value={{ departs, loadDepartaments, crDpt, getDpt, upDpt, delDpt }}>
            {children}
        </DepartamentContext.Provider>
    )
}

export default DepartamentProvider;