import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'ferreteria_secret_key';

export const generateToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
    email: string;
  };

};