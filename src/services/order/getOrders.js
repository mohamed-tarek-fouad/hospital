import Product from "../../helpers/db/product.db.js";
import Order from "../../helpers/db/order.db.js";
import User from "../../helpers/db/users.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getOrders(req, res, next) {
  try {
    const orders = Order.map((o) => {
      const product = Product.find((p) => p.id == o.prodId);
      const user = User.find((u) => u.id == o.useId);
      const order = {
        ...o,
        product,
        user,
      };
      delete order.prodId;
      delete order.useId;
      return order;
    });
    return okResponse(res, "order fetched succesfully", orders);
  } catch (err) {
    next(err);
  }
}
