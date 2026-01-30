import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const projectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().allow('', null).optional(),
});

export const validateCreateProject = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = projectSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  next();
};

export const validateUpdateProject = validateCreateProject;

