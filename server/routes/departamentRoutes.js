import  { Router } from 'express';
import { pool } from '../database/db.js';
const router = Router();
import { getAllDepartaments, getDepartament, createDepartament, updateDepartament, deleteDepartament} from '../controllers/departamentControllers.js';

router.get('/departaments', getAllDepartaments);
router.get('/departament/:id', getDepartament);
router.post('/departament/create', createDepartament);
router.put('/departament/update/:id', updateDepartament); 
router.delete('/departament/delete/:id', deleteDepartament);


export default router;