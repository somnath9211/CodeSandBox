import express from 'express';
import { PORT } from './config/serverConfig.js';
import CORS from 'cors';
import apiRouter from './routes/index.js'; // Import the API router

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(CORS());

app.use('/api', apiRouter); // Use the API router

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Pong!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 