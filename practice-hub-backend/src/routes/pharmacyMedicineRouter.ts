
import { addPharmacyMedicine, deletePharmacyMedicine, updatePharmacyMedicine } from "../controllers/pharamcyMedicineController";
import express from "express";
const pharmacyMedicineRouter = express.Router();

// user signup
pharmacyMedicineRouter.post("/", addPharmacyMedicine);
pharmacyMedicineRouter.put("/:id", updatePharmacyMedicine);
pharmacyMedicineRouter.delete("/:id", deletePharmacyMedicine);

export default pharmacyMedicineRouter;
