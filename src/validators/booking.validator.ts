import { isBookingStatus } from "../models/booking.model.js";

type BookingValidationResult = {
  isValid: boolean;
  errors: string[];
};

/**
 * Type guard that checks whether a value is a non-empty string.
 * @param value - The value to check
 * @returns true if value is a non-empty, non-whitespace string
 */
const isNonEmptyString = (value: unknown): value is string => {
  if (typeof value !== "string") {
    return false;
  }
  if (value.trim().length === 0) {
    return false;
  }
  return true;
};

/**
 * Validates the incoming booking payload before passing it to the service layer.
 * @param payload - The raw request body received from the client
 * @returns Validation result with isValid flag and list of errors if any
 */
const validateBookingPayload = (payload: unknown): BookingValidationResult => {
  if (payload === null || typeof payload !== "object") {
    return { isValid: false, errors: ["Payload must be an object"] };
  }

  const booking = payload as Record<string, unknown>;
  const errors: string[] = [];

  if (!isNonEmptyString(booking.id)) {
    errors.push("ID is required and must be a non-empty string");
  }

  if (
    !booking.businessType ||
    (booking.businessType !== "sports_court" && booking.businessType !== "dental_clinic")
  ) {
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

  // Status must be a string and one of the allowed values
  if (!isBookingStatus(booking.status)) {
    errors.push("Status is required and must be 'pending', 'confirmed', 'cancelled' or 'no_show'");
  }

  if (!isNonEmptyString(booking.createdAt)) {
    errors.push("Created at is required and must be a non-empty string");
  }

  const hasErrors = errors.length > 0;
  const isValid = !hasErrors;

  return {
    isValid: isValid,
    errors: errors,
  };
};

export { validateBookingPayload };
