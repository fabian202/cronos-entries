import { Router } from 'express';
import { ProjectRoutes } from '../modules/project'

const routes = Router();

routes.use('/project', ProjectRoutes);


export default routes;