import express from 'express';
import {
    listUsers,
    getUser,
    createUser,
    updateUserbyId,
    deleteUserbyId
} from '../controllers/userController.js';
import { validateUser } from '../middleware/validateUser.js';

const router = express.Router();

router.get('/',listUsers);
router.get('/:id',getUser);
router.post('/',validateUser, createUser);
router.put('/:id',validateUser, updateUserbyId);
router.delete('/:id',deleteUserbyId);

export default router;
