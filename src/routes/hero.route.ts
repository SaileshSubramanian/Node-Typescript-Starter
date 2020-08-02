import express from "express";
import heroController from "../controllers";


const router = express.Router();

router.get("/heroes", heroController.getHeroesList);

router.post("/heroes", heroController.addHero);

router.put("/heroes/:id", heroController.updateHero);

router.delete("/heroes/:id", heroController.deleteHero);


export const heroRoutes = router;

