import { getBookings } from "./booking.service.js";

/**
 * Checks whether a time slot is available for booking.
 * Cancelled bookings do not block the slot.
 * @param startsAt - ISO date string of the requested time slot
 * @returns Availability result with optional reason if unavailable
 */
export const checkAvailability = (startsAt: string) => {
  const bookings = getBookings();
  const bookingFound = bookings.find(
    (booking) => booking.startsAt === startsAt && booking.status !== "cancelled"
  );

  if (bookingFound) {
    return {
      available: false,
      reason: "Time slot already booked",
    };
  }

  return {
    available: true,
  };
};
