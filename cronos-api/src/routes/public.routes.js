import { Router } from 'express';
import { UserRoutes } from '../modules/user'
import { ProjectRoutes } from '../modules/project'

const routes = Router();

routes.use('/user', UserRoutes);
routes.use('/project', ProjectRoutes);

export default routes;