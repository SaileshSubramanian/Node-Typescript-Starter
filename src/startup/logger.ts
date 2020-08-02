import winston, { createLogger, format, transports, Logger } from "winston";
import path from "path";

const { combine, timestamp, prettyPrint } = format;
const winstonLogger = winston.createLogger({
	format: combine(
		timestamp(),
		prettyPrint(),
	),
	transports: [
		new transports.Console(),
		new transports.File({ filename: path.join(__dirname, "../logfile.log") }),
	],
	exitOnError: false,
});


winstonLogger.exceptions.handle(
	new transports.File({ filename: path.join(__dirname, "../exceptions.log"), level: "error" })
);


export default winstonLogger;