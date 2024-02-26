
import { addAdmin, adminLogin } from "../controllers/admin-controller.js"
import express  from "express";



const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);

export default adminRouter;