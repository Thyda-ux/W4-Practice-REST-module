import express from 'express';
import {
    listCategories,
    getCategory,
    createCategory,
    updateCategorybyId,
    deleteCategorybyId
} from '../controllers/categoriesController.js';
import { validateCategories } from '../middleware/validateCategories.js';
import { getArticlesByCategory } from '../controllers/articlesController.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/',listCategories);
categoriesRouter.get('/:id',getCategory);
categoriesRouter.post('/',validateCategories, createCategory);
categoriesRouter.put('/:id',validateCategories, updateCategorybyId);
categoriesRouter.delete('/:id',deleteCategorybyId);
categoriesRouter.get('/:id/articles', getArticlesByCategory);


export default categoriesRouter;
