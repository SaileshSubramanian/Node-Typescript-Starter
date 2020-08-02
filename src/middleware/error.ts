import { Response, Request, NextFunction } from "express";
import winston from "winston";

const error = (err: Error, req: Request, res: Response, next: NextFunction): void => {
	winston.error(`${err.message} `, err);
	res.status(500).send(`Err: 500, Someting went Wrong, ${err}`);
};
export { error };