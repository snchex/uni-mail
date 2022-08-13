import  { Router } from 'express';
import { getAllRequest, getRequest, createRequest, updateRequest, deleteRequest} from '../controllers/requestControllers.js';
const router = Router();


router.get('/requests', getAllRequest);
router.get('/request/:id', getRequest);
router.post('/request/create', createRequest);
router.put('/request/update/:id', updateRequest);
router.delete('/request/delete/:id', deleteRequest);

export default router;