import express, { type Request, type Response } from "express";
import { indexRouter } from "./routes/index.js";
import { requestLogger } from "./middlewares/requestLogger.js";

const app = express();

// Log all incoming requests for debugging and monitoring
app.use(requestLogger);

app.use(express.json());
app.use("/api", indexRouter);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", service: "pandora-turnos" });
});

export { app };
