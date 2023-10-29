import express, { NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import errorMiddleware from "./middlewares/errorMiddleware";
import authRouter from "./routes/authRouter";
import medicineRouter from "./routes/medicineRouter";
import adminRouter from "./routes/adminRouter";
import pharmacyRouter from "./routes/pharmacyRouter";
import pharmacyMedicineRouter from "./routes/pharmacyMedicineRouter";
import authenticationMiddleware from "./middlewares/authenticationMiddleware";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();

// Global Middle-wares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(authenticationMiddleware);
// Routes
app.use("/api/Auth", authRouter);
app.use("/api/Medicine", medicineRouter);
app.use("/api/Admin", adminRouter);
app.use("/api/Pharmacy", pharmacyRouter);
app.use("/api/PharmacyMedicine", pharmacyMedicineRouter);
app.use(errorMiddleware);

// Start Express server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {});
