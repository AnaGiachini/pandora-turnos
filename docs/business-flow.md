# Business Flow

This document explains how a customer booking request should move through PandoraTurnos.

## 1. Customer Request

The customer asks for a booking. For example: "Is there an available slot at 10:00 AM?"

## 2. Required Information

The API needs the customer name, customer phone, service, date, and time.

## 3. Availability Check

The API checks if the requested time slot is available using `GET /api/availability?startsAt=...`.

## 4. Booking Creation

If the slot is available, the API creates the booking using `POST /api/bookings`.

## 5. Unavailable Time Slot

If the slot is not available, the API should return a clear response explaining that the time slot is already booked.

## 6. Possible Errors

- The customer request is missing required information.
- The date or time format is invalid.
- The requested time slot is already booked.
- The booking payload is invalid.
