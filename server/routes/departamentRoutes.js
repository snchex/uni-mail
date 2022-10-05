import  { Router } from 'express';
import { getAllDepartaments, getDepartament, createDepartament, updateDepartament, deleteDepartament} from '../controllers/departamentControllers.js';
const router = Router();

router.get('/departaments', getAllDepartaments);
router.get('/departament/:id', getDepartament);
router.post('/departament/create', createDepartament);
router.put('/departament/update/:id', updateDepartament); 
router.delete('/departament/delete/:id', deleteDepartament);


export default router;