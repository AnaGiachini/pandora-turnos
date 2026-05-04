import express, { type Request, type Response } from "express";
import { router as bookingRouter } from "./routes/booking.routes.js";

const app = express();
app.use(express.json());
app.use("/bookings", bookingRouter);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", service: "pandora-turnos" });
});

export { app };
