import express, { type Request, type Response } from "express";
import { indexRouter } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/api", indexRouter);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", service: "pandora-turnos" });
});

export { app };
