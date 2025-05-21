export const validateArticles = (req,res,next) => {
    const { title, content } = req.body || {};
    if (!title || !content ) {
        return res.status(400).json({ error: 'Title and Content are required' });
    }
    next();
}