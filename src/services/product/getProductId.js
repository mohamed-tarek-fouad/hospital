import Product from "../../helpers/db/product.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getProductId(req, res, next) {
  try {
    const { id } = req.params;
    const productIndex = Product.findIndex(
      (product) => product.id === parseInt(id)
    );
    if (productIndex === -1) {
      return badRequestResponse(res, "product not found");
    }
    return okResponse(
      res,
      "product fetched succesfully",
      Product[productIndex]
    );
  } catch (err) {
    next(err);
  }
}
