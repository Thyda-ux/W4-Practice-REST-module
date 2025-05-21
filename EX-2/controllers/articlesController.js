import { articles } from '../models/data.js';

const listArticles = async (req,res) => {
    res.json(articles);
};

const getArticles = async (req,res) => {
    const article = articles.find(article => article.id === parseInt(req.params.id));
   if (!article) return res.status(404).json({ error: 'Article not found' });
   res.json(article);
};

const getArticlesByJournalist = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const filteredArticles = articles.filter(article => article.journalistId === journalistId);

    if (filteredArticles.length === 0) {
        return res.status(404).json({ error: 'No articles found for this journalist' });
    }

    res.json(filteredArticles);
};

const getArticlesByCategory = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    const filteredArticles = articles.filter(article => article.categoryId === categoryId);

    if (filteredArticles.length === 0) {
        return res.status(404).json({ error: 'No articles found for this category' });
    }

    res.json(filteredArticles);
};



const createArticle = async (req,res) => {
    const { title , content } = req.body;
    if(!title || !content) {
        return res.status(400).json({ error: 'Title and Content are required ' });
    }
    let newId = 1;

if (articles.length > 0) {
    const ids = articles.map(article => article.id);
    const highestId = Math.max(...ids);
    newId = highestId + 1;
}

// Create the new article object
const newArticle = {
    id: newId,
    title,
    content,
    journalistId: newId,
    categoryId: newId
};
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

const updateArticlebyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    
    const { title, content } = req.body;
    if (title) article.title = title;
    if (content) article.content = content;

    res.json(article);

};

const deleteArticlebyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const index = articles.findIndex(article => article.id === id);

    if (index === -1) return res.status(404).json({ error: 'Article not found' });

    articles.splice(index, 1);
    res.status(204).send();
};

export {listArticles,getArticles,getArticlesByJournalist,getArticlesByCategory,createArticle,updateArticlebyId,deleteArticlebyId};