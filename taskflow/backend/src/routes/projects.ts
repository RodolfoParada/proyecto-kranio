import express from 'express';
import { authenticate } from '../middleware/auth';
import {
getProjects,
getProject,
createProject,
updateProject,
deleteProject,
} from '../controllers/projectController';
import {
validateCreateProject,
validateUpdateProject,
} from '../validators/projectValidators';


const router = express.Router();


router.use(authenticate);


router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', validateCreateProject, createProject);
router.put('/:id', validateUpdateProject, updateProject);
router.delete('/:id', deleteProject);


export default router;