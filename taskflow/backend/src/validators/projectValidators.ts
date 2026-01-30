import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';


const schema = Joi.object({
name: Joi.string().required(),
});


export const validateCreateProject = (
req: Request,
res: Response,
next: NextFunction
) => {
const { error } = schema.validate(req.body);
if (error) return res.status(400).json({ error: error.message });
next();
};


export const validateUpdateProject = validateCreateProject;