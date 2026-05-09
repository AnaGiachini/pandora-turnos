const isValidBookingPayload = (payload: unknown): boolean => {
  if (typeof payload !== "object" || payload === null) {
    return false;
  }

  const booking = payload as Record<string, unknown>;

  const validBusinessTypes = ["sports_court", "dental_clinic"];
  const validStatuses = ["pending", "confirmed", "cancelled", "no_show"];

  const isNonEmptyString = (value: unknown): boolean => {
    return typeof value === "string" && value.trim().length > 0;
  };

  return (
    isNonEmptyString(booking.id) &&
    validBusinessTypes.includes(booking.businessType as string) &&
    isNonEmptyString(booking.customerName) &&
    isNonEmptyString(booking.serviceName) &&
    isNonEmptyString(booking.startsAt) &&
    validStatuses.includes(booking.status as string) &&
    isNonEmptyString(booking.createdAt)
  );
};

export { isValidBookingPayload };
