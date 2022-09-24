import  { Router } from 'express';
const router = Router();
import { getAllUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/authControllers.js';

router.get('/users', getAllUsers);
router.get('/user', getUser);
router.post('/user/create', createUser);



export default router;