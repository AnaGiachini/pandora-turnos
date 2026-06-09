import type { Booking } from "../models/booking.model.js";

export function emitBookingCreated(booking: Booking) {
  const eventPayload = {
    event: "booking.created",
    booking,
  };
  console.log("Event payload:", eventPayload);
}
