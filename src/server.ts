import config from './domain/global';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as routes from './routes';
import { StatusCodes } from 'http-status-codes';
import { handleError, buildErrorObject } from './utils';

// Declaro express server
const app: express.Application = express();

// Habilitar sólo en desarrollo el middleware de registro de peticiones HTTP
if (config.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Para parsear json
app.use(
  bodyParser.json({
    limit: '3mb'
  })
);

// Para analizar application/x-www-form-urlencoded: OPCIONAL para este caso
app.use(
  bodyParser.urlencoded({
    limit: '3mb',
    extended: true
  })
);

// Aplicar middleware para Seguridad de la API
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(
  (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.header('Access-Control-Allow-Origin', '*'); // se puede definir origen para mayor seguridad
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Language'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
    next();
  }
);

// Cargar rutas
routes.init(app);

// Middleware para errores
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    handleError(
      res,
      buildErrorObject(StatusCodes.INTERNAL_SERVER_ERROR, err.message)
    );
    next();
  }
);

export default app;
