import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import projectRoutes from './routes/projects';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

export default app; // Supertest usará esto