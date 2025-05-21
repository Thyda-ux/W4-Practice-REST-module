import express from 'express';
import {
    listArticles,
    getArticles,
    createArticle,
    updateArticlebyId,
    deleteArticlebyId
} from '../controllers/articlesController.js';
import { validateArticles} from '../middleware/validatearticles.js';

const articleRouter = express.Router();

articleRouter.get('/',listArticles);
articleRouter.get('/:id',getArticles);
articleRouter.post('/',validateArticles, createArticle);
articleRouter.put('/:id',validateArticles, updateArticlebyId);
articleRouter.delete('/:id',deleteArticlebyId);

export default articleRouter;
