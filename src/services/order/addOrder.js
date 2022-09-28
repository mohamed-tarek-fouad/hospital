import Product from "../../helpers/db/product.db.js";
import Order from "../../helpers/db/order.db.js";
import User from "../../helpers/db/users.db.js";
import { badRequestResponse } from "../../helpers/functions/ResponseHandler.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function addOrder(req, res, next) {
  try {
    const { quantity, prodId, useId } = req.body;
    const productId = Product.find((p) => p.id == prodId);
    const userId = User.find((u) => u.id == useId);
    const proId = Product.findIndex((p) => p.id == prodId);
    if (!productId) {
      return badRequestResponse(res, "there is no product with this id");
    }
    if (!userId) {
      return badRequestResponse(res, "there is no user with this id");
    }
    if (quantity > productId.quantity) {
      return badRequestResponse(res, "not enough stocks");
    }
    Product[proId].quantity -= quantity;
    const order = {
      id: Product.length + 1,
      quantity,
      prodId,
      useId,
    };
    Order.push(order);
    return okResponse(res, "Order Added succesfully", order);
  } catch (err) {
    next(err);
  }
}
