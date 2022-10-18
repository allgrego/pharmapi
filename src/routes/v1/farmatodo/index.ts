/**
 * All routes with the pattern "/v1/farmatodo"
 */
import { Request, Response, NextFunction, Router as expressRouter } from "express";

const router = expressRouter();

// Middleware specific for these routes
router.use((req: Request, res: Response, next: NextFunction) => {
    // Not doing much for now
    next();
});

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: `Services using Farmatodo data`,
        endpoints: [
            //  `/v1/bcv/rates`
        ]
    });
})


export default router;

