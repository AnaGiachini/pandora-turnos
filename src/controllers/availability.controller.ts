import type { Request, Response } from "express";
import { checkAvailability } from "../services/availability.service.js";

export const checkAvailabilityController = (req: Request, res: Response) => {
  const startsAt = req.query.startsAt;

  if (!startsAt || typeof startsAt !== "string") {
    return res.status(400).json({ error: "startsAt query parameter is required" });
  }

  const availability = checkAvailability(startsAt);

  return res.status(200).json(availability);
};
