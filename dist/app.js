"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var logger_1 = __importDefault(require("./startup/logger"));
var routes_1 = require("./startup/routes");
var app = express_1.default();
exports.app = app;
routes_1.routes(app);
// create a write stream (in append mode)
// setup the logger
process.on("uncaughtException", function (ex) {
    logger_1.default.error(ex.message, ex);
});
process.on("unhandledRejection", function (ex) {
    throw ex;
});
