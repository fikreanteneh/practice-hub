
import { deletePharmacy, updatePharmacy } from "../controllers/pharmacyController";
import express from "express";
const pharmacyRouter = express.Router();

// user signup
pharmacyRouter.put("/:id", updatePharmacy);
pharmacyRouter.delete("/:id", deletePharmacy);

export default pharmacyRouter;
