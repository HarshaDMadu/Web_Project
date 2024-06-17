import {
  addAdmin,
  adminLogin,
  getAdmins,
} from "../controllers/admin-controller.js";
import express from "express";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/:id", getAdmins);

export default adminRouter;
