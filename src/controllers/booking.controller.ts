import type { Request, Response } from "express";
import { createBooking, getBookings } from "../services/booking.service.js";
import type { Booking } from "../models/booking.model.js";
import { isValidBookingPayload } from "../validators/booking.validator.js";

const createBookingController = (req: Request, res: Response) => {
  if (!isValidBookingPayload(req.body)) {
    return res.status(400).json({ error: "Invalid booking payload" });
  }
  const booking = req.body as Booking;
  const data = createBooking(booking);
  return res.status(201).json({ data });
};

const getBookingsController = (_req: Request, res: Response) => {
  const data = getBookings();
  return res.status(200).json({ data });
};

export {
  createBookingController,
  getBookingsController,
};
