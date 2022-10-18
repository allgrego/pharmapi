/**
 * All routes with the pattern "/v1/**"
 */
import { Request, Response, Router as expressRouter } from "express";
import { validateMetaApiKey } from "../../controllers/authController";
// Routes
import farmatodoRoutes from './farmatodo'

const router = expressRouter();

// Middleware specific for these routes
router.use(validateMetaApiKey);

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: `This is v1 index!`,
        baseEndpoints: [
            "/v1/farmatodo",
        ],
    });
})

// Farmatodo services
router.use("/farmatodo", farmatodoRoutes);

export default router;

