"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var http_1 = __importDefault(require("http"));
var logger_1 = __importDefault(require("./startup/logger"));
var server = http_1.default.createServer(app_1.app);
app_1.app.get("/", function (req, res) {
    res.json({ "greet": "hello" });
});
var PORT = process.env.PORT || 5000;
server.listen(PORT);
server.on("listening", function () {
    logger_1.default.info((process.env.NODE_ENV || "dev") + " server up listening on PORT " + PORT);
});
