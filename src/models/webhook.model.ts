import type { Booking } from "./booking.model.js";

export type WebhookEvent = {
  event: string;
  booking: Booking;
};
