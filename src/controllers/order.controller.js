import { Router } from "express";
import * as OrderService from "../services/order/index.js";
const router = Router();

router.get("/", OrderService.getOrders);
router.get("/:id", OrderService.getOrderId);
router.post("/", OrderService.addOrder);

export default router;
