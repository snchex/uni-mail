import  { Router } from 'express';
import { verifyUser } from "../middlewares/authUser.js";
import { getAllMailTypes, getMailType, createMailType, updateMailType, deleteMailType } from '../controllers/typeControllers.js';
const router = Router();


router.get('/mailtypes',verifyUser, getAllMailTypes);
router.get('/mailtype/:id',verifyUser, getMailType);
router.post('/mailtype/create',verifyUser, createMailType);
router.put('/mailtype/update/:id',verifyUser, updateMailType);
router.delete('/mailtype/delete/:id',verifyUser, deleteMailType);

export default router;