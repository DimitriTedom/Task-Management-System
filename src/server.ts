// src/server.ts
// Configurations de Middlewares
import express from 'express';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { setupSwagger } from './swagger';
import morgan from 'morgan';
import { ONE_HUNDRED, SIXTY } from './core/constants';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(
	rateLimit({
		max: ONE_HUNDRED,
		windowMs: SIXTY,
		message: 'Trop de Requete à partir de cette adresse IP '
	})
);
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
		credentials: true
	})
);
app.use(morgan('combined'));

setupSwagger(app);
export default app;
