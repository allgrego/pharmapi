/**
 * Locatel router (V1)
 */
import { Request, Response, NextFunction, Router as expressRouter } from "express";
import { providerIsActive } from "../../../common/services/general";
import { notFound } from "../../../common/controllers/generalController";
import { index } from "../controllers/locatelController";

const router = expressRouter();

// Middleware specific for these routes
router.use((req: Request, res: Response, next: NextFunction) => {
    // Verify if provider services are active
    if (!providerIsActive('locatel')) notFound(req, res)
    next();
});

router.get('/', (req: Request, res: Response) => {
    index(req, res)
})


export default router;