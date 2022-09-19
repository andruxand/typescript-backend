import { SuccessResponse } from '../domain/responses/apiResponse';

/**
 * Construye objeto success
 * @param {number} code - código error
 * @param {objetc} data - objeto de datos
 */
export default (data: object): SuccessResponse => {
  return {
    data
  };
};
