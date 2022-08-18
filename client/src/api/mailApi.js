
import axios from "axios";



export const toggleMailStatu = async (id, done) =>
await axios.put(`http://localhost:3030/mail/update/${id}`, {
  done,
});