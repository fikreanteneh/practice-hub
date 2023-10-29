import CatchAsyncErrors from "../middlewares/catchAsyncErrors";
import AuthService from "../services/auth";
import { Request, Response } from "express";

export const signup = CatchAsyncErrors(async (req: Request, res:Response) => {
    const user = await AuthService.signup(req.body);
    return res.status(201).json({ ...user })

});


export const signin = CatchAsyncErrors(async (req:Request, res:Response) => {
    const user = await AuthService.signin(req.body);
    return res.status(200).json({ ...user });
})

export const changePassword = async (req:Request, res:Response) => {
  // try {
  //   // const { email, password } = req.body;
  //   // const user = await signInWithEmailAndPassword(auth, email, password)
  //   // const token = await user.user.getIdToken()
  //   // return res.status(200).json({ token });
  // } catch (error) {
  //   res.status(500).json({ error: "Error Changing password" });
  // }
};

export const deleteAccount = (req:Request, res:Response) => {
  // try {

  // } catch (error) {
  //   res.status(500).json({ error: "Error canceling appointment" });
  // }
};
