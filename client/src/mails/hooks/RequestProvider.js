import React, { useContext, useState } from "react";
import { getAllRequests, getRequest, createRequest, updateRequest, deleteRequest } from "../api/requestApi";
import { RequestContext } from "../context/RequestContext";


export const useRequests = () => {
    const context = useContext(RequestContext);
    if (context === undefined) {
        throw new Error("El Context is undefined");
    }
    return context;
}

export const RequestProvider = ({ children }) => {

    const [requests, setRequests] = useState([]);

    async function loadRequests() {
        const response = await getAllRequests();
        setRequests(response.data);

    }

    const gtRequest = async (id) => {
        try {
            const response = await getRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);

        }
    }

    const crRequest = async (request) => {
        try {
            const response = await createRequest(request);
            console.log(response);
        } catch (error) {
            console.error(error);

        }
    }
    const upRequest = async (id, newFields) => {
        try {
            const response = await updateRequest(id, newFields);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    const delRequest = async (id) => {
        try {
            const response = await deleteRequest(id);
            setRequests(requests.filter(request => request.id !== id));
            console.log(response);
        } catch (error) {

            console.error(error);
        }
    }


    return (
        <RequestContext.Provider value={{ requests, loadRequests, gtRequest, crRequest, upRequest, delRequest }} >
            {children}
        </RequestContext.Provider>
    )
}

export default RequestProvider;