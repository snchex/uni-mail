import express from 'express';
//import { createMail, getAllMails, getMail, updateMail, deleteMail } from '../controllers/mailController.js';
import { getAllMailTypes, getMailType, createMailType, updateMailType, deleteMailType} from '../controllers/typeMailController.js';
const router = express.Router();
/*
router.get('mailAll/', getAllMails);
router.get('mail/:id', getMail);
router.post('createMail/', createMail);
router.put('updateMail/:id', updateMail);
router.delete('deleteMail/:id', deleteMail);
*/

router.get('/', getAllMailTypes);
router.get('/:id', getMailType);
router.post('/', createMailType);
router.put('/:id', updateMailType);
router.delete('/:id', deleteMailType);




export default router;
