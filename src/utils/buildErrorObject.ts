import { ErrorResponse } from '../domain/responses/apiResponse';
import { getReasonPhrase } from 'http-status-codes';

/**
 * Constuye objeto error
 * @param {number} code - código error
 * @param {string} message - mensaje error
 */
export default (code: number, message: string | null = null): ErrorResponse => {
  if (!message) message = getReasonPhrase(code);
  return {
    code,
    message
  };
};
