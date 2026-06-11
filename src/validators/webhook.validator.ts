export type WebhookEventValidationResult = {
  isValid: boolean;
  errors: string[];
};

export const validateWebhookPayload = (payload: unknown): WebhookEventValidationResult => {
  if (payload === null || typeof payload !== "object") {
    return { isValid: false, errors: ["Payload must be an object"] };
  }

  const booking = payload as Record<string, unknown>;
  const errors: string[] = [];

  if (typeof booking.event !== "string") {
    errors.push("Event is required and must be a non-empty string");
  }

  if (!booking.booking) {
    errors.push("Booking is required");
  }
  

  return {
    isValid: errors.length === 0,
    errors,
  };
}






