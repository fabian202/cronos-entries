import { Router } from 'express';
import { UserRoutes } from '../modules/user'
import { ProjectRoutes } from '../modules/project'
import { EntryRoutes } from '../modules/entry'

const routes = Router();

routes.use('/user', UserRoutes);
routes.use('/project', ProjectRoutes);
routes.use('/entry', EntryRoutes);

export default routes;