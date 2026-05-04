import type { Request, Response } from "express";
import { getBookings } from "../services/booking.service.js";

const listBookings = (_req: Request, res: Response) => {
  const data = getBookings();
  return res.status(200).json({ data });
};

export { listBookings };
