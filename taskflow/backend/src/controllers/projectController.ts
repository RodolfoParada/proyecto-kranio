import { Request, Response } from 'express';
import { ProjectService } from '../services/projectService';


export const getProjects = async (req: any, res: Response) => {
const projects = await ProjectService.getUserProjects(req.user.id);
res.json(projects);
};


export const getProject = async (req: any, res: Response) => {
const project = await ProjectService.getProjectById(req.params.id, req.user.id);
res.json(project);
};


export const createProject = async (req: any, res: Response) => {
const project = await ProjectService.createProject(req.user.id, req.body);
res.status(201).json(project);
};


export const updateProject = async (req: any, res: Response) => {
const project = await ProjectService.updateProject(req.params.id, req.user.id, req.body);
res.json(project);
};


export const deleteProject = async (req: any, res: Response) => {
const result = await ProjectService.deleteProject(req.params.id, req.user.id);
res.json(result);
};