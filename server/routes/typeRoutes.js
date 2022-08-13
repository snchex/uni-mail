import  { Router } from 'express';
import {pool} from '../db.js';
const router = Router();
import { getAllMailTypes, getMailType, createMailType, updateMailType, deleteMailType } from '../controllers/typeControllers.js';


router.get('/mailtypes', getAllMailTypes);
router.get('/mailtypes/:id', getMailType);
router.post('/mailtypes', createMailType);
router.put('/mailtypes/:id', updateMailType);
router.delete('/mailtypes/:id', deleteMailType);

export default router;