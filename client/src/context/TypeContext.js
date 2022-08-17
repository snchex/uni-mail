import { createContext, useContext, useState  } from 'react';
import { getAllTypes, deleteType} from '../api/type.js';


export const TypeContext = createContext();

export const useTypes = () => {
    const context = useContext(TypeContext);
    if (!context) {
        throw new Error("useType must be used within a TypeContextProvider")
    }
    return context;
};

export const TypeContextProvider = ({ children }) => {
    const [types, setTypes] = useState([]);

    async function loadTypes() {
        const response = await getAllTypes();
        setTypes(response.data);
    }

    const delType = async (idmailType) => {
        try {
            const response = await deleteType(idmailType);
            types.filter(type => type.id !== idmailType);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
    <TypeContext.Provider value={{types, loadTypes, delType}} >
        {children}
    </TypeContext.Provider>
    )
    

}
export default TypeContextProvider;