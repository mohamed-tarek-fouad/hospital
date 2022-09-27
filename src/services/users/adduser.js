import Users from "../../helpers/db/users.db.js";
import { badRequestResponse } from "../../helpers/functions/ResponseHandler.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function addUser(req, res, next) {
  try {
    const { name, email, phoneNumber } = req.body;
    if (Users.some((user) => user.email === email)) {
      return badRequestResponse(res, "Email already exists");
    }
    const user = {
      id: Users.length + 1,
      name,
      email,
      phoneNumber,
    };
    Users.push(user);
    return okResponse(res, "User registered succesfully", user);
  } catch (err) {
    next(err);
  }
}
