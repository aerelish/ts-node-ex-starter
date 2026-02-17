import router from '#routes/_routes.js';
import express from 'express';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// routes
app.use('/api/v1', router);

export default app;
