import type { Request, Response } from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
} from "../services/booking.service.js";
import type { Booking, BookingStatus } from "../models/booking.model.js";
import { validateBookingPayload } from "../validators/booking.validator.js";
import { BOOKING_STATUSES } from "../models/booking.model.js";

export const createBookingController = (req: Request, res: Response) => {
  const validation = validateBookingPayload(req.body);
  if (!validation.isValid) {
    return res.status(400).json({
      error: "Invalid booking payload",
      details: validation.errors,
    });
  }
  const booking = req.body as Booking;
  const data = createBooking(booking);
  return res.status(201).json({ data });
};

export const getBookingsController = (_req: Request, res: Response) => {
  const data = getBookings();
  return res.status(200).json({ data });
};

export const getBookingByIdController = (req: Request, res: Response) => {
  const { id } = req.params;

  // Guards against undefined, array values from Express params, and whitespace-only strings
  if (!id || typeof id !== "string" || id.trim() === "") {
    return res.status(400).json({ error: "Booking id is required" });
  }

  const data = getBookingById(id);

  if (!data) {
    return res.status(404).json({ error: "Booking not found" });
  }

  return res.status(200).json({ data });
};

export const updateBookingStatusController = (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  // Guards against undefined, array values from Express params, and whitespace-only strings
  if (!id || typeof id !== "string" || id.trim() === "") {
    return res.status(400).json({ error: "Booking id is required" });
  }

  if (typeof status !== "string") {
    return res.status(400).json({ error: "Booking status is required" });
  }

  if (!BOOKING_STATUSES.includes(status as BookingStatus)) {
    return res
      .status(400)
      .json({ error: "Booking status must be 'pending', 'confirmed', 'cancelled' or 'no_show'" });
  }

  const data = updateBookingStatus(id, status as BookingStatus);

  if (!data) {
    return res.status(404).json({ error: "Booking not found" });
  }

  return res.status(200).json({ data });
};

export const deleteBookingController = (req: Request, res: Response) => {
  const { id } = req.params;

  // Guards against undefined, array values from Express params, and whitespace-only strings
  if (!id || typeof id !== "string" || id.trim() === "") {
    return res.status(400).json({ error: "Booking id is required" });
  }

  const data = deleteBooking(id);

  if (!data) {
    return res.status(404).json({ error: "Booking not found" });
  }

  return res.status(200).json({ data });
};
