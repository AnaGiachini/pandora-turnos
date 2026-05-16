import { Router } from "express";
import { checkAvailabilityController } from "../controllers/availability.controller.js";

const router = Router();

router.get("/", checkAvailabilityController);

export { router };
