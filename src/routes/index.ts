import { Router as ExpressRouter, Request, Response, NextFunction } from "express";
import { HttpErrorResponse } from "../types/errors.types";
import v1Routes from './v1'

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
    // To tell the user if there is auth or not
    const authType = Boolean(process.env.META_API_KEY || null) ? 'apikey' : 'none'

    const providers = [
        "Farmatodo",
    ]

    res.json({
        message: `Venezuelan pharmacies API service`,
        version: process.env.APP_VERSION || 1,
        providers,
        exampleEndpoints: [
            `/v1/farmatodo/suggestions`,
            // "/v1/bcv/rates",
        ],
        documentation: process.env.DOCUMENTATION_URL || 'not available',
        authType
    });
});

// Version 1 routes
router.use("/v1", v1Routes);

// Fallback (404)
router.get("**", (req: Request, res: Response) => {
    const errorResponse: HttpErrorResponse = { error: { code: "not-found", message: "Invalid route" } }
    res.status(404).json(errorResponse)
});

export default router;
