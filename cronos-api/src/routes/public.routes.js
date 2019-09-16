import { Router } from 'express';
import { UserRoutes } from '../modules/user'
import { EntryRoutes } from '../modules/entry'

const routes = Router();

routes.use('/user', UserRoutes);
routes.use('/entry', EntryRoutes);

export default routes;