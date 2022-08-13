import  { Router } from 'express';
import {pool} from '../database/db.js';
const router = Router();
import { getAllMailTypes, getMailType, createMailType, updateMailType, deleteMailType } from '../controllers/typeControllers.js';


router.get('/mailtypes', getAllMailTypes);
router.get('/mailtype/:id', getMailType);
router.post('/mailtype/create', createMailType);
router.put('/mailtype/update/:id', updateMailType);
router.delete('/mailtype/delete/:id', deleteMailType);

export default router;