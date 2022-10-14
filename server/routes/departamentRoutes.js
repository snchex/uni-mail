import  { Router } from 'express';
import { getAllDepartaments, getDepartament, createDepartament, updateDepartament, deleteDepartament} from '../controllers/departamentControllers.js';
import { verifyUser } from "../middlewares/authUser.js";
const router = Router();

router.get('/departaments',verifyUser, getAllDepartaments);
router.get('/departament/:id',verifyUser, getDepartament);
router.post('/departament/create',verifyUser, createDepartament);
router.put('/departament/update/:id',verifyUser, updateDepartament); 
router.delete('/departament/delete/:id',verifyUser, deleteDepartament);


export default router;