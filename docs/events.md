# Events

This document defines the event contracts that PandoraTurnos will use for future automation and webhook flows.

## booking.created

This event represents a booking that was successfully created by the API.

### When it happens

After `POST /api/bookings` creates a booking.

### Payload

```json
{
  "event": "booking.created",
  "booking": {
    "id": "3",
    "businessType": "dental_clinic",
    "customerName": "Laura Perez",
    "serviceName": "Dental cleaning",
    "startsAt": "2026-12-01T10:00:00Z",
    "status": "pending",
    "createdAt": "2026-06-08T10:00:00Z"
  }
}
```

### Future automation

This event will be used to trigger n8n workflows such as confirmation messages, Google Sheets registration, and incident tracking if the automation fails.
