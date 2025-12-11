import { Router } from 'express';
import * as controller from '../controllers/vacationsController';

const router = Router();
router.post('/', controller.create);
router.get('/', controller.list);

export default router;
