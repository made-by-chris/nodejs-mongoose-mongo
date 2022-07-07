// http://localhost:8000/users/
import { Router } from "express";
const router = new Router();
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.js";

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
