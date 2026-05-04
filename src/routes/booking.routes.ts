import { Router } from "express";
import { listBookings } from "../controllers/booking.controller.js";

const router = Router();

router.get("/", listBookings);

export { router };
