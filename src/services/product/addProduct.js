import Product from "../../helpers/db/product.db.js";
import cat from "../../helpers/db/cat.db.js";
import { badRequestResponse } from "../../helpers/functions/ResponseHandler.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function addProduct(req, res, next) {
  try {
    const { name, quantity, catId } = req.body;
    categoryId = cat.find((cat) => {
      cat.id == catId;
    });
    if (categoryId === -1) {
      return badRequestResponse(res, "there is no category with this id");
    }

    const product = {
      id: Product.length + 1,
      name,
      quantity,
      catId,
    };
    Product.push(product);
    return okResponse(res, "Product Added succesfully", product);
  } catch (err) {
    next(err);
  }
}
