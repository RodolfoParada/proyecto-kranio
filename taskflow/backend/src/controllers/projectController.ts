import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { ProjectService } from '../services/projectService';

interface Params {
  id: string;
}

export const createProject = async (req: AuthRequest, res: Response) => {
  const project = await ProjectService.createProject(req.user!.id, req.body);
  res.status(201).json(project);
};

export const getProjectById = async (
  req: AuthRequest<Params>,
  res: Response
) => {
  const project = await ProjectService.getProjectById(
    req.params.id,
    req.user!.id
  );

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.json(project);
};

export const getUserProjects = async (req: AuthRequest, res: Response) => {
  const projects = await ProjectService.getUserProjects(req.user!.id);
  res.json(projects);
};

export const updateProject = async (
  req: AuthRequest<Params>,
  res: Response
) => {
  const project = await ProjectService.updateProject(
    req.params.id,
    req.user!.id,
    req.body
  );

  res.json(project);
};

export const deleteProject = async (
  req: AuthRequest<Params>,
  res: Response
) => {
  await ProjectService.deleteProject(req.params.id, req.user!.id);
  res.status(204).send();
};
