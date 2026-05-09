import { Router } from "express";
import { createBookingController, getBookingsController } from "../controllers/booking.controller.js";

const router = Router();

router.get("/", getBookingsController);
router.post("/", createBookingController);

export { router };
