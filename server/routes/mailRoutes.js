import  { Router } from 'express';
const router = Router();

import { getAllMails, getMail, createMail, updateMail, deleteMail } from '../controllers/mailControllers.js';

router.get('/mails', getAllMails);
router.get('/mail/id:', getMail);
router.post('/mail/create', createMail);
router.put('/mail/update/:id', updateMail);
router.delete('/mail/delete/:id', deleteMail);


export default router;