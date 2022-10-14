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
router.get('/users',verifyUser, adminOnly, getUsers);
router.get('/user/:id',verifyUser, adminOnly, getUserById);
router.post('/user/create',verifyUser, adminOnly, createUser);
router.put('/user/update/:id',verifyUser, adminOnly, updateUser);
router.delete('/user/delete/:id',verifyUser, adminOnly, deleteUser);

export default router;