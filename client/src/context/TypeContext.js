import { createContext, useContext, useState  } from 'react';
import { getAllTypes } from '../api/type.js';

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
    return (
    <TypeContext.Provider value={{types, loadTypes}} >
        {children}
    </TypeContext.Provider>
    )
    

}
export default TypeContextProvider;