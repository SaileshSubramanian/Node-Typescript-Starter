"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHero = exports.updateHero = exports.addHero = exports.getHeroesList = void 0;
var services_1 = __importDefault(require("../services"));
exports.getHeroesList = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var heroes, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, services_1.default.getHeroes()];
            case 1:
                heroes = _a.sent();
                res.status(200).json(heroes);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addHero = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hero, newHero;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hero = {
                    id: 0,
                    name: req.body.name,
                    weapons: req.body.weapons,
                    strengths: req.body.strengths
                };
                return [4 /*yield*/, services_1.default.addHero(hero)];
            case 1:
                newHero = _a.sent();
                res.status(201).json(newHero);
                return [2 /*return*/];
        }
    });
}); };
exports.updateHero = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hero, updatedHero;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hero = {
                    id: parseInt(req.params.id),
                    name: req.body.name,
                    weapons: req.body.weapons,
                    strengths: req.body.strength
                };
                return [4 /*yield*/, services_1.default.updateHero(hero)];
            case 1:
                updatedHero = _a.sent();
                res.status(200).json(updatedHero);
                return [2 /*return*/];
        }
    });
}); };
exports.deleteHero = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedHero;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, services_1.default.deleteHero(parseInt(id))];
            case 1:
                deletedHero = _a.sent();
                if (deletedHero) {
                    res.status(200).json({});
                }
                return [2 /*return*/];
        }
    });
}); };
// export default { getHeroesList, addHero, updateHero, deleteHero };
