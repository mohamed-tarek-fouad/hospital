import express from "express";
import UserRouter from "./controllers/users.controller.js";
import ProductRouter from "./controllers/product.controller.js";
import OrderRouter from "./controllers/order.controller.js";
import logger from "./helpers/middlewares/logger.js";
import dotenv from "dotenv";
import errorHandler from "./helpers/middlewares/errorHandler.js";
import multer from "multer";
import { join } from "path";
dotenv.config();
const app = express();

// -- Middleware --
app.use(express.json());
app.use(logger);
app.use("/uploads", express.static(join(process.cwd(), "uploads")));

// -- Routes --
app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/orders", OrderRouter);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  console.log(`http://localhost:${PORT}`);
});

export default app;
