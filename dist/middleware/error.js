"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var winston_1 = __importDefault(require("winston"));
var error = function (err, req, res, next) {
    winston_1.default.error(err.message + " ", err);
    res.status(500).send("Err: 500, Someting went Wrong, " + err);
};
exports.error = error;
