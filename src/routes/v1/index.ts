/**
 * All routes with the pattern "/v1/**"
 */
import { Request, Response, Router as expressRouter } from "express";
import { v1Index } from "../../common/controllers/generalController";
// Routes
import LocatelRouter from '../../modules/locatel/router/router'
import FarmatodoRouter from '../../modules/farmatodo/router/router'


const router = expressRouter();

// Middleware specific for these routes
// router.use(() => { });

router.get('/', (req: Request, res: Response) => {
    v1Index(req, res)
})

// Locatel services
router.use("/locatel", LocatelRouter);
// Farmatodo services
router.use("/farmatodo", FarmatodoRouter);

export default router;

