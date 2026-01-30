import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/database';

export class AuthService {
  static async register(userData: any) {
    const existingUser = await prisma.user.findUnique({ where: { email: userData.email } });
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const user = await prisma.user.create({
      data: { ...userData, password: hashedPassword },
      select: { id: true, name: true, email: true }
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
    return { user, token };
  }

  static async login(credentials: any) {
    const user = await prisma.user.findUnique({ where: { email: credentials.email } });
    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }
}