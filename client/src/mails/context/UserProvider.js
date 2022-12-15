import React, { useContext, useState } from "react";
import { getAllUsers, deleteUser } from "../api/userApi";
import { UserContext } from "./UserContext";


export const useUsers = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("El Context is undefined");
    }
    return context;
}

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);

    async function loadUsers() {
        const response = await getAllUsers();
        setUsers(response.data);

    }


    const delUser = async (id) => {
        try {
            const response = await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
            console.log(response);
        } catch (error) {

            console.error(error);
        }
    }


    return (
        <UserContext.Provider value={{ users, loadUsers, delUser }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;