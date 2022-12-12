import Product from "../../helpers/db/product.db.js";
import Cat from "../../helpers/db/cat.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getProducts(req, res, next) {
  try {
    const products = Product.map((p) => {
      const category = Cat.find((c) => c.id == p.catId);
      const product = {
        ...p,
        category,
      };
      delete product.catId;
      return product;
    });
    return okResponse(res, "Product fetched succesfully", products);
  } catch (err) {
    next(err);
  }
}
