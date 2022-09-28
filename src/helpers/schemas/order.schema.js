import Joi from 'joi';

const orderSchema = Joi.object({
	userId: Joi.number().required().messages({
		'any.required': 'userId is required',
		'number.base': 'userId must be a number',
	}),
	products: Joi.array()
		.items(
			Joi.object({
				productId: Joi.number().required().messages({
					'number.base': 'productId must be a number',
					'any.required': 'productId is required',
				}),
				quantityTaken: Joi.number().greater(0).required().messages({
					'number.base': 'quantityTaken must be a number',
					'number.greater': 'quantityTaken must be greater than 0',
					'any.required': 'quantityTaken is required',
				}),
			})
		)
		.required()
		.min(1)
		.messages({
			'any.required': 'products is required',
			'array.base': 'products must be an array',
			'array.min': 'products must have at least 1 item',
		}),
});

export default orderSchema;
