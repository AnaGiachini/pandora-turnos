import { Router } from "express";
import { createBookingController, getBookingsController, getBookingByIdController } from "../controllers/booking.controller.js";

const router = Router();

router.post("/", createBookingController);
router.get("/", getBookingsController);
router.get("/:id", getBookingByIdController);

export { router };
