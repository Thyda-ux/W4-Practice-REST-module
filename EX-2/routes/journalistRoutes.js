import express from 'express';
import {
    listJournalists,
    getJournalist,
    createJournalist,
    updateJournalistbyId,
    deleteJournalistbyId
} from '../controllers/journalistsController.js';
import { validateJournalists } from '../middleware/validateJournalists.js';
import { getArticlesByJournalist } from '../controllers/articlesController.js';

const journalistsRouter = express.Router();

journalistsRouter.get('/',listJournalists);
journalistsRouter.get('/:id',getJournalist);
journalistsRouter.post('/',validateJournalists, createJournalist);
journalistsRouter.put('/:id',validateJournalists, updateJournalistbyId);
journalistsRouter.delete('/:id',deleteJournalistbyId);
journalistsRouter.get('/:id/articles', getArticlesByJournalist);

export default journalistsRouter;
