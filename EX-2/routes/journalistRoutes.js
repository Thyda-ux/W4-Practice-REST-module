import express from 'express';
import {
    listJournalists,
    getJournalist,
    createJournalist,
    updateJournalistbyId,
    deleteJournalistbyId
} from '../controllers/journalistsController.js';
import { validateJournalists } from '../middleware/validateJournalists.js';

const journalistsRouter = express.Router();

journalistsRouter.get('/',listJournalists);
journalistsRouter.get('/:id',getJournalist);
journalistsRouter.post('/',validateJournalists, createJournalist);
journalistsRouter.put('/:id',validateJournalists, updateJournalistbyId);
journalistsRouter.delete('/:id',deleteJournalistbyId);

export default journalistsRouter;
