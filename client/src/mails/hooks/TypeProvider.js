import React,{ useContext, useState } from 'react';
import { getAllTypes, deleteType, createType, getmailType, updateType } from '../../mails/api/typeApi';
import { TypeContext} from '../context/TypeContext';



export const useTypes = () => {
    const context = useContext(TypeContext);
    if (context === undefined) {
        throw new Error("useType must be used within a TypeContextProvider")
    }
    return context;
};

export const TypeProvider = ({ children }) => {
    const [types, setTypes] = useState([]);
    //View List
    async function loadTypes() {
        const response = await getAllTypes();
        setTypes(response.data);
    }

    const getType = async (id) => {
        try {
            const response = await getmailType(id);
            return response.data 
        } catch (error) {
            console.error(error);
        }
        
    }
    
    const crType = async (type) => {
        try {
            const response = await createType(type);
            console.log(response);
            
        } catch (error) {
            console.error(error);
        }
    }
    
    const upType = async (id, newFields) => {
        try {
            const response = await updateType(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
            
        }
        
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




    return (
        <TypeContext.Provider value={{ types, loadTypes, delType, crType, getType, upType }} >
            {children}
        </TypeContext.Provider>
    )


}
export default TypeProvider;