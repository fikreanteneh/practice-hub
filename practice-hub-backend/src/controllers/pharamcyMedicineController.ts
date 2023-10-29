import { Request, Response } from "express";
import HandleErrorsAndResponses from "../middlewares/handleResponseAndErrors";
import PharmacyMedicineService from "../services/pharmacyMedicineService";

export const addPharmacyMedicine = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    return await PharmacyMedicineService.addPharmacyMedicine(
      req.body.data,
      req.body.user
    );
    // return res.status(200).json({ ...pharmacyMedicine });
  }
);

export const updatePharmacyMedicine = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    return await PharmacyMedicineService.updatePharmacyMedicine(
      req.body.data,
      req.body.user
    );
    // return res.status(200).json({ ...pharmacyMedicine });
  }
);

export const deletePharmacyMedicine = HandleErrorsAndResponses(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    return await PharmacyMedicineService.deletePharmacyMedicine(
      id,
      req.body.user
    );
    // return res.status(200).json({ ...pharmacyMedicine });
  }
);
