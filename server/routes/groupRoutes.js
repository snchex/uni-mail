import  { Router } from 'express';
import { verifyUser } from "../middlewares/authUser.js";
import { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup } from '../controllers/groupControllers.js';
const router = Router();

router.get('/groups',verifyUser, getAllGroups);
router.get('/group/:id',verifyUser, getGroup);
router.post('/group/create',verifyUser, createGroup);
router.put('/group/update/:id',verifyUser, updateGroup);
router.delete('/group/delete/:id',verifyUser, deleteGroup);

export default router;