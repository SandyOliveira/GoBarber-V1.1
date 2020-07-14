import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';


import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController  from './app/controllers/fileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';


const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Middleware autenticação-> dessa forma todas as rotas abaixo precisará o token
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
//upload de avatar(imagem)
routes.post('/files', upload.single('file'), FileController.store);


export default routes;
