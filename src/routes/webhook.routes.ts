import { Router } from "express";
import { receiveWebhookController } from "../controllers/webhook.controller.js";

const router = Router();

router.post("/", receiveWebhookController);

export { router };