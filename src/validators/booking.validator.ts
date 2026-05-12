type BookingValidationResult = {
  isValid: boolean;
  errors: string[];
};

const validateBookingPayload = (payload: unknown): BookingValidationResult => {
  if (payload === null || typeof payload !== "object") {
    return { isValid: false, errors: ["Payload must be an object"] };
  }

  const booking = payload as Record<string, unknown>;
  const errors: string[] = [];

  if (!booking.id || typeof booking.id !== "string") {
    errors.push("ID is required and must be a string");
  }
  if (!booking.businessType || (booking.businessType !== "sports_court" && booking.businessType !== "dental_clinic")) {
    errors.push("Business type is required and must be 'sports_court' or 'dental_clinic'");
  }
  if (!booking.customerName || typeof booking.customerName !== "string") {
    errors.push("Customer name is required and must be a string");
  }
  if (!booking.serviceName || typeof booking.serviceName !== "string") {
    errors.push("Service name is required and must be a string");
  }
  if (!booking.startsAt || typeof booking.startsAt !== "string") {
    errors.push("Starts at is required and must be a string");
  }
  if (!booking.status || (booking.status !== "pending" && booking.status !== "confirmed" && booking.status !== "cancelled" && booking.status !== "no_show")) {
    errors.push("Status is required and must be 'pending', 'confirmed', 'cancelled' or 'no_show'");
  }
  if (!booking.createdAt || typeof booking.createdAt !== "string") {
    errors.push("Created at is required and must be a string");
  }
  return { isValid: errors.length === 0, errors };
}

export { validateBookingPayload };