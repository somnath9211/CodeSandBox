import express from 'express';
import { PORT } from './config/serverConfig.js';
import CORS from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(CORS());

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Pong!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 