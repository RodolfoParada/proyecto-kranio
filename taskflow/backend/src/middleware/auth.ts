import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

// Definimos una interfaz local para asegurar que TypeScript no se queje aquí
interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (
  req: AuthRequest, // Usamos nuestra interfaz extendida
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const token = header.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = decoded; // Ahora sí lo reconocerá
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};