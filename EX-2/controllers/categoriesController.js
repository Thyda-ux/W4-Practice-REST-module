import { categories } from '../models/data.js';

const listCategories = async (req,res) => {
    res.json(categories);
};

const getCategory = async (req,res) => {
    const category = categories.find(category => category.id === parseInt(req.params.id));
   if (!category) return res.status(404).json({ error: 'Category not found' });
   res.json(category);
};

const createCategory = async (req,res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({ error: 'Name is required ' });
    }
    let newId = 1;

if (categories.length > 0) {
    const ids = categories.map(category => category.id);
    const highestId = Math.max(...ids);
    newId = highestId + 1;
}

// Create the new user object
const newCategory = {
    id: newId,
    name,
};
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

const updateCategorybyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(category => category.id === id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    
    const {name} = req.body;
    if (name) category.name = name;

    res.json(category);

};

const deleteCategorybyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const index = categories.findIndex(category => category.id === id);

    if (index === -1) return res.status(404).json({ error: 'Category not found' });

    categories.splice(index, 1);
    res.status(204).send();
};

export {listCategories,getCategory,createCategory,updateCategorybyId,deleteCategorybyId};