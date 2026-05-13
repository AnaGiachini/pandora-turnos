import { Router } from "express";
import { createBookingController, getBookingsController, getBookingByIdController, updateBookingStatusController } from "../controllers/booking.controller.js";

const router = Router();

router.post("/", createBookingController);
router.get("/", getBookingsController);
router.get("/:id", getBookingByIdController);
router.patch("/:id/status", updateBookingStatusController);

export { router };
