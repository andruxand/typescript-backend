/**
 * Interface respuesta API.
 */

interface BaseResponse {
  code: number;
}

interface SuccessResponse {
  data?: any;
}

interface ErrorResponse extends BaseResponse {
  message?: any;
}

export { SuccessResponse, ErrorResponse };
