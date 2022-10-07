import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";
import { verifyUser, adminOnly } from "../middlewares/authUser.js";

const router = express.Router();
// verifyUser, adminOnly,
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user/create', createUser);
router.put('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);

export default router;