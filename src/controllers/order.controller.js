import { Router } from 'express';
import orderSchema from '../helpers/schemas/order.schema.js';
import * as OrderService from '../services/order/index.js';
import JoiMiddleware from '../helpers/middlewares/joiMiddleware.js';
const router = Router();

router.get('/', OrderService.getOrders);
router.get('/:id', OrderService.getOrderId);
router.post('/', JoiMiddleware(orderSchema), OrderService.addOrder);

export default router;
