import express from 'express';
import logger from './middleware/logger.js';
import categoriesRouter from './routes/categoryRoutes.js';
import journalistsRouter from './routes/journalistRoutes.js';
import articleRouter from './routes/articleRoutes.js';

const app = express();
app.use(express.json());
app.use(logger);

//Default route
app.get('/', (req, res) => {
    res.send('Welcome to the REST module');
});

// Mount routes
app.use('/articles',articleRouter);
app.use('/journalists',journalistsRouter);
app.use('/categories',categoriesRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
