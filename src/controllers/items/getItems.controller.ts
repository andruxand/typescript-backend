import { Request, Response, NextFunction } from 'express';
import itemsObject from '../../../data/items.json';
import { itemsInterface } from '../../domain/entities/items';
import { StatusCodes } from 'http-status-codes';
import buildSuccessObject from '../../utils/buildSuccessObject';
// import buildSuccessObject from '@utils/buildSuccessObject';

const getItems: itemsInterface[] = itemsObject as itemsInterface[];

export default (_req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(StatusCodes.OK).json(buildSuccessObject(getItems));
  } catch (error) {
    return next(error);
  }
};
