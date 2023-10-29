import { deleteAdmin, updateAdmin } from "../controllers/adminController";
import express from "express";
import AuthorizationMiddleware from "./../middlewares/authorizationMiddleware";
const adminRouter = express.Router();

// user signup
adminRouter.put("/:id",updateAdmin);
adminRouter.delete("/:id",deleteAdmin);

export default adminRouter;
