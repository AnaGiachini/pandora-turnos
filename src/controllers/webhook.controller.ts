import type { Request, Response } from "express";
import { validateWebhookPayload } from '../validators/webhook.validator.js';


export const receiveWebhookController = (req: Request, res: Response) => {
  const validation = validateWebhookPayload(req.body);
  if (!validation.isValid) {
    return res.status(400).json({
      error: "Invalid webhook payload",
      details: validation.errors,
    });
  }
  console.log("Webhook received:", req.body);
  return res.status(200).json({ message: "Webhook received" });
}