import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string().min(5).max(32).required().messages({
    "string.min": "Name must be at least 5 characters",
    "string.max": "Name can't be longer than 32 characters",
    "string.empty": "Name can't be empty",
    "any.required": "Name is required",
  }),
  quantity: Joi.string().required().min(0).messages({
    "string.min": "quantity must be a number",
    "any.required": "quantity is required",
  }),
});

export default productSchema;
