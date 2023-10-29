import { Request, Response } from "express";
import HandleErrorsAndResponses from "../middlewares/handleResponseAndErrors";

export const updatePharmacy = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {}
);

export const deletePharmacy = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {}
);
