type BookingValidationResult = {
  isValid: boolean;
  errors: string[];
};

const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

const validateBookingPayload = (payload: unknown): BookingValidationResult => {
  if (payload === null || typeof payload !== "object") {
    return { isValid: false, errors: ["Payload must be an object"] };
  }

  const booking = payload as Record<string, unknown>;
  const errors: string[] = [];

  if (!isNonEmptyString(booking.id)) {
    errors.push("ID is required and must be a non-empty string");
  }

  if (!booking.businessType || (booking.businessType !== "sports_court" && booking.businessType !== "dental_clinic")) {
    errors.push("Business type is required and must be 'sports_court' or 'dental_clinic'");
  }

  if (!isNonEmptyString(booking.customerName)) {
    errors.push("Customer name is required and must be a non-empty string");
  }

  if (!isNonEmptyString(booking.serviceName)) {
    errors.push("Service name is required and must be a non-empty string");
  }

  if (!isNonEmptyString(booking.startsAt)) {
    errors.push("Starts at is required and must be a non-empty string");
  }

  if (!booking.status || (booking.status !== "pending" && booking.status !== "confirmed" && booking.status !== "cancelled" && booking.status !== "no_show")) {
    errors.push("Status is required and must be 'pending', 'confirmed', 'cancelled' or 'no_show'");
  }

  if (!isNonEmptyString(booking.createdAt)) {
    errors.push("Created at is required and must be a non-empty string");
  }

  return { isValid: errors.length === 0, errors };
};

export { validateBookingPayload };
