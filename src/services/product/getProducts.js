import Product from "../../helpers/db/product.db.js";
import Cat from "../../helpers/db/cat.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getProducts(req, res, next) {
  try {
    let category = Cat.forEach((cat) => {
      cat.name;
    });
    let product = Product.forEach((product) => {
      product.name, product.quantity;
    });
    let arr = [];
    console.log(product, category);
    return okResponse(res, "Product fetched succesfully", product);
  } catch (err) {
    next(err);
  }
}
