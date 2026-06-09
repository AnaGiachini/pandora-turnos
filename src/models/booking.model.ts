export const BOOKING_STATUSES = ["pending", "confirmed", "cancelled", "no_show"] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export type Booking = {
  id: string;
  businessType: "sports_court" | "dental_clinic";
  customerName: string;
  serviceName: string;
  startsAt: string;
  status: BookingStatus;
  createdAt: string;
};

export const isBookingStatus = (value: unknown): value is BookingStatus => {
  if (typeof value !== "string") {
    return false;
  }

  return BOOKING_STATUSES.includes(value as BookingStatus);
};
