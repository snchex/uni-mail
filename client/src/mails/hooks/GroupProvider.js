import { useContext, useState } from "react";
import { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup } from "../api/groupApi";
import { GroupContext } from "../context/GroupContext";


export const useGroups = () => {
    const context = useContext(GroupContext);
    if (context === undefined) {
        throw new Error("El Context is undefined");
    }
    return context;
}

export const GroupProvider = ({ children }) => {

    const [groups, setGroups] = useState([]);

    async function loadGroups() {
        const response = await getAllGroups();
        setGroups(response.data);

    }

    const gtGroup = async (id) => {
        try {
            const response = await getGroup(id);
            return response.data;
        } catch (error) {
            console.error(error);

        }
    }

    const crGroup = async (group) => {
        try {
            const response = await createGroup(group);
            console.log(response);
        } catch (error) {
            console.error(error);

        }
    }
    const upGroup = async (id, newFields) => {
        try {
            const response = await updateGroup(id, newFields);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    const delGroup = async (id) => {
        try {
            const response = await deleteGroup(id);
            setGroups(groups.filter(group => group.id !== id));
            console.log(response);
        } catch (error) {

            console.error(error);
        }
    }


    return (
        <GroupContext.Provider value={{ groups, loadGroups, gtGroup, crGroup, upGroup, delGroup }} >
            {children}
        </GroupContext.Provider>
    )
}

export default GroupProvider;