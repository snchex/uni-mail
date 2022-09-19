import  { Router } from 'express';
const router = Router();
import { getAllUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/authControllers.js';

router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.post('/user/create', createUser);
router.put('/user/update/:id', updateUser); 
router.delete('/user/delete/:id', deleteUser);


export default router;