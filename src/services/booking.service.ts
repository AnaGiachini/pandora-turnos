import type { Booking, BookingStatus } from "../models/booking.model.js";

// TODO: replace with database persistence
const bookings: Booking[] = [
  {
    id: "1",
    businessType: "sports_court",
    customerName: "John Doe",
    serviceName: "Tennis Court",
    startsAt: "2026-10-15T10:00:00Z",
    status: "pending",
    createdAt: "2026-10-10T10:00:00Z",
  },
  {
    id: "2",
    businessType: "dental_clinic",
    customerName: "Jane Smith",
    serviceName: "Dental Cleaning",
    startsAt: "2026-10-16T14:00:00Z",
    status: "confirmed",
    createdAt: "2026-10-11T14:00:00Z",
  },
];

/**
 * @param booking - The booking to create
 * @returns The created booking
 */
export const createBooking = (booking: Booking): Booking => {
  bookings.push(booking);
  return booking;
};

/**
 * @returns All bookings in the collection
 */
export const getBookings = (): Booking[] => {
  return bookings;
};

/**
 * @param id - The booking ID to search for
 * @returns The booking if found, undefined otherwise
 */
export const getBookingById = (id: string): Booking | undefined => {
  return bookings.find((booking) => booking.id === id);
};

/**
 * @param id - The booking ID to update
 * @param status - The new status to set
 * @returns The updated booking if found, undefined otherwise
 */
export const updateBookingStatus = (id: string, status: BookingStatus): Booking | undefined => {
  const booking = getBookingById(id);
  if (!booking) {
    return undefined;
  }
  booking.status = status;
  return booking;
};

/**
 * @param id - The booking ID to delete
 * @returns The deleted booking if found, undefined otherwise
 */
export const deleteBooking = (id: string): Booking | undefined => {
  const index = bookings.findIndex((booking) => booking.id === id);

  if (index === -1) {
    return undefined;
  }

  // Save before splice — the element no longer exists in the array after removal
  const deletedBooking = bookings[index];
  bookings.splice(index, 1);

  return deletedBooking;
};
