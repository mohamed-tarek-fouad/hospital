import { Router } from "express";
import joiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import * as UsersService from "../services/users/index.js";
import registerSchema from "../helpers/schemas/register.schema.js";
import multer from "multer";
import { join } from "path";
import Users from "../helpers/db/users.db.js";
const router = Router();
const storageEngine = multer.diskStorage({
  destination: (req, file, func) => {
    if (file.fieldname == "backdrop") {
      func(null, join(process.cwd(), "uploads/backdrop"));
    }
    if (file.fieldname == "image") {
      func(null, join(process.cwd(), "uploads/image"));
    }
    {
    }
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}${file.originalname}`;
    cb(null, filename);
  },
});

const uploads = multer({
  storage: storageEngine,
});
router.get("/", UsersService.getUsers);
router.get("/:id", UsersService.getUserId);
router.post(
  "/",
  uploads.fields([{ name: "image" }, { name: "backdrop" }]),
  joiMiddleware(registerSchema),
  UsersService.addUser
);

export default router;
