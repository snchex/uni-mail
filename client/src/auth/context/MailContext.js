import { createContext, useContext, useState } from 'react';
import { toggleMailStatu } from '../api/mailApi';


export const MailContext = createContext();

export const useMails = () => {
    const context = useContext(MailContext);
    if (context === undefined) {
        throw new Error("useType must be used within a TypeContextProvider")
    }
    return context;
};

export const TypeContextProvider = ({ children }) => {
    const [mails, setmMails] = useState([]);
    //View List


    const toggleStatu = async (id) => {
        try {
          const mailFound = mails.find((mail) => mail.id === id);
          await toggleMailStatu(id, mailFound.done === 0 ? true : false);
          setmMails(
            mails.map((mail) =>
              mail.id === id ? { ...mail, done: !mail.done } : mail
            )
          );
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <MailContext.Provider value={{ toggleStatu}} >
            {children}
        </MailContext.Provider>
    )


}
export default TypeContextProvider;