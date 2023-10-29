import { Request, Response } from "express";
import HandleErrorsAndResponses from "../middlewares/handleResponseAndErrors";
import MedicineService from "../services/medicineService";

export const addMedicine = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    return await MedicineService.addMedicine(req.body.data, req.body.user);
    // return medicine
    // return res.status(200).json({ ...medicine });
  }
);

export const updateMedicine = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    return await MedicineService.updateMedicine(req.body.data, req.body.user);
    // return res.status(200).json({ ...medicine });
  }
);

export const deleteMedicine = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    return await MedicineService.deleteMedicine(id, req.body.user);
    // return res.status(200).json({ ...medicine });
  }
);
