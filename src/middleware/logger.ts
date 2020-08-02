import { NextFunction } from "express";

import express from "express";

const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.info(`${req.method} : ${req.originalUrl}`);
	next();
};
export { logger };