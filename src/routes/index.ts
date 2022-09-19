import express from 'express';
import { API_PREFIX, API_MSG } from '../resources/constants';
import items from './items';
import { StatusCodes } from 'http-status-codes';
import { handleError, buildErrorObject, buildSuccessObject } from '../utils';

// Ruta bucle, carga cada archivo como una ruta excepto el archivo index
export const init = (app: express.Application): void => {
  const router: express.Router = express.Router();

  /*
   * Cargamos rutas para items
   */
  app.use(`/${API_PREFIX}/items`, items);

  /*
   * Ruta inicial
   */
  router.get('/', (_req: express.Request, res: express.Response): void => {
    res.status(StatusCodes.OK).json(buildSuccessObject({ msg: API_MSG }));
  });

  /*
   * Error 404
   */
  router.use('*', (_req: express.Request, res: express.Response): void => {
    handleError(res, buildErrorObject(StatusCodes.NOT_FOUND));
  });

  app.use(router);
};
