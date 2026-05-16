import type { Booking, BookingStatus } from "../models/booking.model.js";


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

export const createBooking = (booking: Booking): Booking => {
  bookings.push(booking);
  return booking;
};

export const getBookings = (): Booking[] => {
  return bookings;
};

export const getBookingById = (id: string): Booking | undefined => {
  return bookings.find((booking) => booking.id === id);
};

export const updateBookingStatus = (id: string, status: BookingStatus): Booking | undefined => {
  const booking = getBookingById(id);
  if (!booking) {
    return undefined;
  }
  booking.status = status;
  return booking;
};

export const deleteBooking = (id: string): Booking | undefined => {
  const index = bookings.findIndex((booking) => booking.id === id);

  if (index === -1) {
    return undefined;
  }

  const deletedBooking = bookings[index];
  bookings.splice(index, 1);

  return deletedBooking;
};

