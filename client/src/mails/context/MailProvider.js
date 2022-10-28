import React, { useContext, useState } from "react";
import { getAllMails, getMail, createMail, updateMail, deleteMail } from "../api/mailApi";

import { MailContext } from "../context/MailContext";


export const useMails = () => {
    const context = useContext(MailContext);
    if (context === undefined) {
        throw new Error("El Context is undefined");
    }
    return context;
}

export const MailProvider = ({ children }) => {
    const [mails, setMails] = useState([]);
    const [ gp, setGp ] = useState(false);
    const [msg, setMsg] = useState("");

    async function loadMails() {
        const response = await getAllMails();
        setMails(response.data);
       
    }

    const gtMail = async (id) => {
        try {
            const response = await getMail(id);
            return response.data;
        } catch (error) {
            console.error(error);

        }
        
    }   

    const crMail = async (mail) => {
        try {
            const response = await createMail(mail);
            console.log(response);
            setGp(true);
        } catch (error) {
            setMsg(error.response.data.msg);
            setGp(false);
        }
    }
    const upMail = async (id, newFields) => {
        try {
            const response = await updateMail(id, newFields);
            console.log(response)
            setGp(true);
        } catch (error) {
            setMsg(error.response.data.msg);
            setGp(false);
        }
    }

    const delMail = async (id) => {
        try {
            const response = await deleteMail(id);
            setMails(mails.filter(mail => mail.id !== id));
            console.log(response);
        } catch (error) {

            console.error(error);
        }
    }


    return (
        <MailContext.Provider value={{ gp, mails, msg, loadMails, gtMail, crMail, upMail, delMail }} >
            {children}
        </MailContext.Provider>
    )
}

export default MailProvider;