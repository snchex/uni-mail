
import axios from "axios";

export const getAllMails = async () =>
    await axios.get('http://192.168.17.242:3030/mails');



export const getMailUser = async () =>
    await axios.get('http://192.168.17.242:3030/mailUser');


export const getMail = async (id) =>
    await axios.get(`http://192.168.17.242:3030/mail/${id}`);


export const createMail = async (mail) =>
    await axios.post('http://192.168.17.242:3030/mail/create', mail);

export const updateMail = async (id, newFields) =>
    await axios.put(`http://192.168.17.242:3030/mail/update/${id}`, newFields);


export const deleteMail = async (id) =>
    await axios.delete(`http://192.168.17.242:3030/mail/delete/${id}`);

