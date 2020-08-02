"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hero_route_1 = require("./hero.route");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.use("/", hero_route_1.heroRoutes);
exports.default = router;
