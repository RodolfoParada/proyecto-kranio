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

app.get('/api', (_req, res) => {
  res.json({
    message: 'Comunicación backend activa y funcionando desde http://localhost:4000/api/',
  });
});

app.get('/api/auth', (_req, res) => {
  res.json({
    message: 'Comunicación backend activa y funcionando desde http://localhost:4000/api/auth',
  });
});


app.get('/api/projects', (_req, res) => {
  res.json({
    message: 'Comunicación backend activa y funcionando http://localhost:4000/api/projects',
  });
});


export default app; // Supertest usará esto