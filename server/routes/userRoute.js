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
router.get('/users',verifyUser, getUsers);
router.get('/user/:id',verifyUser, getUserById);
router.post('/user/create',verifyUser, createUser);
router.put('/user/update/:id',verifyUser, updateUser);
router.delete('/user/delete/:id',verifyUser, deleteUser);

export default router;