"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var error_1 = require("../middleware/error");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var routes_1 = __importDefault(require("../routes"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var routes = function (app) {
    var accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "../http.log"), { flags: "a" });
    app.use(morgan_1.default("combined", { stream: accessLogStream }));
    app.use(helmet_1.default());
    app.use(cors_1.default());
    app.use(body_parser_1.default.json());
    app.use("/api", routes_1.default);
    app.use(error_1.error);
};
exports.routes = routes;
