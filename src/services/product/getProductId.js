import Product from '../../helpers/db/product.db.js';
import Cat from '../../helpers/db/cat.db.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export function getProductId(req, res, next) {
	try {
		const { id } = req.params;
		let product = Product.find((p) => p.id == id);
		if (!product) {
			return badRequestResponse(res, 'there is no product with this id');
		}
		const category = Cat.find((c) => c.id == product.catId);
		product = {
			...product,
			category,
		};
		delete product.catId;
		return okResponse(res, 'product fetched succesfully', product);
	} catch (err) {
		next(err);
	}
}
