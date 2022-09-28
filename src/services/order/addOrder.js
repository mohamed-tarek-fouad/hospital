import Product from '../../helpers/db/product.db.js';
import Order from '../../helpers/db/order.db.js';
import User from '../../helpers/db/users.db.js';
import {
	badRequestResponse,
	notFoundResponse,
} from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export function addOrder(req, res, next) {
	try {
		const { userId, products } = req.body;
		const user = User.find((user) => user.id === userId);
		if (!user) {
			return notFoundResponse(res, 'User not found');
		}
		for (const product of products) {
			const productFound = Product.find(
				(productFound) => productFound.id === product.productId
			);
			if (!productFound) {
				return notFoundResponse(res, 'Product not found');
			}
			if (productFound.quantity < product.quantityTaken) {
				return badRequestResponse(
					res,
					'Product quantity not available'
				);
			}
			const productIndex = Product.findIndex(
				(productFound) => productFound.id === product.productId
			);
			Product[productIndex].quantity -= product.quantityTaken;
		}
		const order = {
			id: Order.length + 1,
			userId,
			products,
		};
		Order.push(order);
		return okResponse(res, 'Order Added succesfully', order);
	} catch (err) {
		next(err);
	}
}
