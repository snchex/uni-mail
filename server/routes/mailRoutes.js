import  { Router } from 'express';
import { getAllMails, getMail, createMail, updateMail, deleteMail, getMailUser } from '../controllers/mailControllers.js';
import { verifyUser } from "../middlewares/authUser.js";
const router = Router();

router.get('/mails', verifyUser, getAllMails);
router.get('/mailUser', verifyUser, getMailUser);
router.get('/mail/:id', verifyUser, getMail);
router.post('/mail/create', verifyUser, createMail);
router.put('/mail/update/:id', verifyUser, updateMail);
router.delete('/mail/delete/:id', verifyUser, deleteMail);


export default router;