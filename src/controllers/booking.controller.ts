import type { Request, Response } from "express";
import { createBooking, getBookings, getBookingById } from "../services/booking.service.js";
import type { Booking } from "../models/booking.model.js";
import { validateBookingPayload } from "../validators/booking.validator.js";

const createBookingController = (req: Request, res: Response) => {
  const validation = validateBookingPayload(req.body);
  if (!validation.isValid) {
    return res.status(400).json({
      error: "Invalid booking payload",
      details: validation.errors
    });
  }
  const booking = req.body as Booking;
  const data = createBooking(booking);
  return res.status(201).json({ data });
};

const getBookingsController = (_req: Request, res: Response) => {
  const data = getBookings();
  return res.status(200).json({ data });
};

const getBookingByIdController = (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id !== "string") {
    return res.status(400).json({ error: "Booking id is required" });
  }

  const data = getBookingById(id);

  if (!data) {
    return res.status(404).json({ error: "Booking not found" });
  }

  return res.status(200).json({ data });
};


export {
  createBookingController,
  getBookingsController,
  getBookingByIdController,
};
