import express from 'express';

import { getAllUsers, getUserById, createUser,updateUserById, deleteUserById } from '../controllers/userController.js';

const router = express.Router();


//define endpoints
router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.patch('/users/:id', updateUserById);

router.delete('/users/:id', deleteUserById);

export default router;