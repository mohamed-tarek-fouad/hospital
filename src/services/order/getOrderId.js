import Product from "../../helpers/db/product.db.js";
import Order from "../../helpers/db/order.db.js";
import User from "../../helpers/db/users.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getOrderId(req, res, next) {
  try {
    const { id } = req.params;
    let order = Order.find((o) => o.id == id);
    if (!order) {
      return badRequestResponse(res, "there is no order with this id");
    }
    const product = Product.find((p) => p.id == order.prodId);
    const user = User.find((u) => u.id == order.useId);
    order = {
      ...order,
      product,
      user,
    };
    delete order.prodId;
    delete order.useId;
    return okResponse(res, "product fetched succesfully", order);
  } catch (err) {
    next(err);
  }
}
