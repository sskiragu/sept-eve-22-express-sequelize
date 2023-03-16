import express from 'express';

import { getAllRoles, getRoleById, createRole,updateRoleById, deleteRoleById } from '../controllers/roleController.js';

const router = express.Router();


//define endpoints
router.get('/roles', getAllRoles);

router.get('/roles/:id', getRoleById);

router.post('/roles', createRole);

router.patch('/roles/:id', updateRoleById);

router.delete('/roles/:id', deleteRoleById);

export default router;