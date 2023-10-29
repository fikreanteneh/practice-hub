import { addMedicine, deleteMedicine, updateMedicine } from "../controllers/medicineController";
import express from "express";
const medicineRouter = express.Router();

// user signup
medicineRouter.post("/", addMedicine);
medicineRouter.put("/:id", updateMedicine);
medicineRouter.delete("/:id", deleteMedicine);
export default medicineRouter;
