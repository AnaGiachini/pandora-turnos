import type { Request, Response, NextFunction } from "express";

/**
 * Logs every incoming HTTP request with timestamp, method, and URL.
 * This helps with debugging, monitoring, and troubleshooting.
 */
export const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
