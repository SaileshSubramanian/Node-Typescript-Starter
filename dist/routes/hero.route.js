"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRoutes = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = __importDefault(require("../controllers"));
var router = express_1.default.Router();
router.get("/heroes", controllers_1.default.getHeroesList);
router.post("/heroes", controllers_1.default.addHero);
router.put("/heroes/:id", controllers_1.default.updateHero);
router.delete("/heroes/:id", controllers_1.default.deleteHero);
exports.heroRoutes = router;
// export const heroRoutes = router;
