import { Router as ExpressRouter, Request, Response, NextFunction } from "express";
import { HttpErrorResponse } from "../common/types/errors.types";
import v1Routes from './v1'
import { index, notFound } from "../common/controllers/generalController";

/**
 * All routes configuration
 */
const router = ExpressRouter()

// Meta Middleware
router.use((req: Request, res: Response, next: NextFunction) => {
    // Not doing much for now
    next();
});

// Index
router.get("/", (req: Request, res: Response) => {
    index(req, res)
});

// Version 1 routes
router.use("/v1", v1Routes);

// Fallback (404)
router.get("**", (req: Request, res: Response) => {
    notFound(req, res)
});

export default router;
