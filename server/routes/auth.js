import  { Router } from 'express';
const router = Router();
import { register, login} from '../controllers/authControllers.js';

router.post('/login', login);
router.post('/register', register);



export default router;