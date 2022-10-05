import  { Router } from 'express';
import { getAllRequests, getRequest, createRequest, updateRequest, deleteRequest} from '../controllers/requestControllers.js';
//import { verifyUser } from "../middlewares/authUser.js";
const router = Router();

router.get('/requests', getAllRequests);
router.get('/request/:id', getRequest);
router.post('/request/create', createRequest);
router.put('/request/update/:id', updateRequest);
router.delete('/request/delete/:id', deleteRequest);

export default router;
