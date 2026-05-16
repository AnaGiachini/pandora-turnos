import { Router } from "express";
import { createBookingController, getBookingsController, getBookingByIdController, updateBookingStatusController, deleteBookingController } from "../controllers/booking.controller.js";


const router = Router();

router.post("/", createBookingController);
router.get("/", getBookingsController);
router.get("/:id", getBookingByIdController);
router.patch("/:id/status", updateBookingStatusController);
router.delete("/:id", deleteBookingController);


export { router };
