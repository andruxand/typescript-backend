import { Response } from 'express';
import { ErrorResponse } from '../domain/responses/apiResponse';

/**
 * Manejo de respuesta a errores
 * @param {Response} res - objeto de respuesta
 * @param {apiResponse} err - objeto de error
 */
export default (res: Response, err: ErrorResponse): void => {
  // Prints error in console
  if (process.env.NODE_ENV === 'development') {
    console.log(err);
  }
  // Sends error to user
  res.status(err.code).json({
    errors: {
      msg: err.message
    }
  });
};
