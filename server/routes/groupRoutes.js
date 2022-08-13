import  { Router } from 'express';
const router = Router();

import { getAllGroups, getGroup, createGroup, updateGroup, deleteGroup } from '../controllers/groupControllers.js';

router.get('/groups', getAllGroups);
router.get('/group/:id', getGroup);
router.post('/group/create', createGroup);
router.put('/group/update/:id', updateGroup);
router.delete('/group/delete/:id', deleteGroup);

export default router;