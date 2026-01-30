import request from 'supertest';
import app from '../../src/app'; // Importación directa
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Auth API', () => {
  // Limpiamos la base de datos antes de cada test para evitar conflictos de "email duplicado"
  beforeEach(async () => {
     await prisma.project.deleteMany();
    await prisma.user.deleteMany();
  });

  // Cerramos la conexión a la base de datos al terminar todos los tests
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /api/auth/register', () => {
    test('should register user successfully', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@test.com',
        password: 'password123',
      };

      const res = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(res.status).toBe(201);
      expect(res.body.user).toHaveProperty('id');
      expect(res.body.user.name).toBe(userData.name);
      expect(res.body.user.email).toBe(userData.email);
      expect(res.body).toHaveProperty('token');
    });

    test('should return 400 for duplicate email', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@test.com',
        password: 'password123',
      };

      // Primer registro exitoso
      await request(app).post('/api/auth/register').send(userData);

      // Intento de duplicado
      const res = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(res.status).toBe(400);
      expect(res.body.error).toBe('User already exists');
    });
  });

  describe('POST /api/auth/login', () => {
    test('should login successfully with correct credentials', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@test.com',
        password: 'password123',
      };

      // Registrar usuario primero
      await request(app).post('/api/auth/register').send(userData);

      // Intentar login
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: userData.email,
          password: userData.password,
        });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body.user.email).toBe(userData.email);
    });

    test('should return 401 for invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'wrong@test.com',
          password: 'wrongpassword',
        });

      expect(res.status).toBe(401);
      expect(res.body.error).toBe('Invalid credentials');
    });
  });
});