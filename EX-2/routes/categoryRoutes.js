import express from 'express';
import {
    listCategories,
    getCategory,
    createCategory,
    updateCategorybyId,
    deleteCategorybyId
} from '../controllers/categoriesController.js';
import { validateCategories } from '../middleware/validateCategories.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/',listCategories);
categoriesRouter.get('/:id',getCategory);
categoriesRouter.post('/',validateCategories, createCategory);
categoriesRouter.put('/:id',validateCategories, updateCategorybyId);
categoriesRouter.delete('/:id',deleteCategorybyId);

export default categoriesRouter;
