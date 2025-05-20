import express from 'express';
import logger from './middleware/logger.js';
import router from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(logger);

//Default route
app.get('/', (req, res) => {
    res.send('Welcome to the REST module');
});

// Mount routes
app.use('/users',router);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
