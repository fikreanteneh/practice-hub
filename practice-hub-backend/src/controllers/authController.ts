import { Request, Response } from "express";
import HandleErrorsAndResponses from "../middlewares/handleResponseAndErrors";
import AuthService from "../services/authService";

export const pharmacyRegister = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    return await AuthService.pharmacyRegister(req.body.data, req.body.user);
    // return res.status(200).json({ ...user });
  }
);

export const adminRegister = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    return await AuthService.adminRegister(req.body.data, req.body.user);
    // return res.status(200).json({ ...user });
  }
);


export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  req.body.data = { id: id };
  return await AuthService.deleteUser(id, req.body.user);
  // return res.status(200).json({ ...message });
};
