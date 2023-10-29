import { Request, Response } from "express";
import HandleErrorsAndResponses from "../middlewares/handleResponseAndErrors";

export const updateAdmin = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {}
);

export const deleteAdmin = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {}
);
