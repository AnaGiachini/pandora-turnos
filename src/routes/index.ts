import { Router } from "express";
import { router as bookingRouter } from "./booking.routes.js";
import { router as availabilityRouter } from "./availability.routes.js";

const router = Router();

router.use("/bookings", bookingRouter);
router.use("/availability", availabilityRouter);

export { router as indexRouter };
