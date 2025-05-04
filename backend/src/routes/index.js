import express from 'express';
import v1Router from './v1/index.js'; // Import the v1 router

const router = express.Router();

router.use('/v1', v1Router);

export default router;