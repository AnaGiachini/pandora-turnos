import { getBookings } from "./booking.service.js";

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
