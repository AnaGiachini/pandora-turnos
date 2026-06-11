import { Router } from "express";
import { router as bookingRouter } from "./booking.routes.js";
import { router as availabilityRouter } from "./availability.routes.js";
import { router as webhookRouter } from "./webhook.routes.js";
const router = Router();

router.use("/bookings", bookingRouter);
router.use("/availability", availabilityRouter);
router.use("/webhooks", webhookRouter);

export { router as indexRouter };
