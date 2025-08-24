import express from 'express';
import { PORT } from './config/serverConfig.js';
import CORS from 'cors';
import apiRouter from './routes/index.js'; // Import the API router
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import chokidar from 'chokidar';
import { handleEditorSocketEvents } from './socketHandlers/editorHandler.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});


app.use(express.json());
app.use(express.urlencoded());
app.use(CORS());

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Add more event listeners as needed
});
app.use('/api', apiRouter); // Use the API router

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Pong!' });
})

const editorNamespace = io.of('/editor');
editorNamespace.on('connection', (socket) => {
    console.log('A user connected to /editor namespace:', socket.id);

    let projectId = socket.handshake.query['projectId'];
    console.log('Project ID from query params:', projectId);

    if (projectId) {
        var watcher = chokidar.watch(`./projects/${projectId}`, {
            ignored: (path) => path.includes('node_modules'),
            persistent: true,
            awaitWriteFinish: {
                stabilityThreshold: 2000,
                pollInterval: 100
            },
            ignoreInitial: true // Ignore initial add events
        });

        watcher.on('all', (event, path) => {
            console.log(`File ${event}d: ${path}`);
        });
    }

    handleEditorSocketEvents(socket, editorNamespace);

    // socket.on('disconnect', async () => {
    //     console.log('User disconnected from /editor namespace:', socket.id);
    //     await watcher.close();
    // });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 