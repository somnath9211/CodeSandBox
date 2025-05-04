import express from 'express';
import { pinCheckApi } from '../../controllers/pingCheckApi.js';
import projectRouter from './project.js'; // Import the project router



const router = express.Router();
router.use('/ping', pinCheckApi);
router.use('/projects', projectRouter)
export default router; 