import express from "express";
import { signin,signup, deleteAccount, changePassword } from "../controllers/auth";
const authRouter = express.Router();

// user signup
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.delete("/deleteaccount/:id", deleteAccount);
authRouter.delete("/changepassword/:id", changePassword);


export default authRouter;