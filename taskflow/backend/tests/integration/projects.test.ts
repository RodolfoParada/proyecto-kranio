import request from 'supertest';
import app from '../../src/app';
import { prisma } from '../../src/config/database';
import bcrypt from 'bcryptjs';

let token: string;

beforeAll(async () => {
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  const password = await bcrypt.hash('123456', 10);
  await prisma.user.create({
    data: { email: 'test@test.com', name: 'Test User', password },
  });

  const res = await request(app).post('/api/auth/login').send({
    email: 'test@test.com',
    password: '123456',
  });

  token = res.body.token;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Projects API', () => {
  test('Should create a project', async () => {
    const res = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Martillos Pro' });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Martillos Pro');
  });
});
