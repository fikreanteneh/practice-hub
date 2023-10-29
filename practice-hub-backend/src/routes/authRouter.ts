import express from "express";
import { adminRegister, deleteUser, pharmacyRegister } from "../controllers/authController";
const authRouter = express.Router();

// user signup
authRouter.post("/AdminRegister", adminRegister);
authRouter.post("/PharmacyRegister", pharmacyRegister);
authRouter.delete("/:id", deleteUser);


// authRouter.post("/Login", login);
// authRouter.post("/ChangePassword", changePassword);


export default authRouter;