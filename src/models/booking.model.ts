export type Booking = {
  id: string;
  businessType: "sports_court" | "dental_clinic";
  customerName: string;
  serviceName: string;
  startsAt: string;
  status: BookingStatus;
  createdAt: string;
};

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "no_show";

// Runtime array used for validation — mirrors BookingStatus values
export const BOOKING_STATUSES: BookingStatus[] = ["pending", "confirmed", "cancelled", "no_show"];
