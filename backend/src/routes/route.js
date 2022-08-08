import express from 'express';
import { createMail, getAllMail, getMail, updateMail, deleteMail } from '../controllers/mailController.js';
const router = express.Router();

router.get('/', getAllMail);
router.get('/:id', getMail);
router.post('/', createMail);
router.put('/:id', updateMail);
router.delete('/:id', deleteMail);


export default router;
