import { Request, NextFunction } from "express";


const async = (handler: any) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await handler(req, res);
		}
		catch (ex) {
			next(ex);
		}
	};
};

export { async };