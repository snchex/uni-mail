import { createContext, useContext, useState } from 'react';
import { getAllTypes, deleteType, createType, getmailType } from '../api/typeApi';


export const TypeContext = createContext();

export const useTypes = () => {
    const context = useContext(TypeContext);
    if (context === undefined) {
        throw new Error("useType must be used within a TypeContextProvider")
    }
    return context;
};

export const TypeContextProvider = ({ children }) => {
    const [types, setTypes] = useState([]);
    //View List
    async function loadTypes() {
        const response = await getAllTypes();
        setTypes(response.data);
    }

    const delType = async (id) => {
        try {
            const response = await deleteType(id);
            setTypes(types.filter(type => type.id !== id));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const crType = async (type) => {
        try {
            const response = await createType(type);
            console.log(response);

        } catch (error) {
            console.error(error);
        }
    }

    const getType = async (id) => {
        try {
            const response = await getmailType(id);
            return response.data
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <TypeContext.Provider value={{ types, loadTypes, delType, crType, getType }} >
            {children}
        </TypeContext.Provider>
    )


}
export default TypeContextProvider;