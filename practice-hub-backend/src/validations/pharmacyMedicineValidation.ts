import { PharmacyMedicineCreate } from "../models/PharamcyMedicine";
import * as yup from "yup";
import ValidationError from "../errors/validationError";

export const pharamacyMedicineCreateValidation = (pharmacymedicine: any) => { 
    yup.object().shape({
        pharmacyid: yup.string().required("Pharmacy is required"),
        medicineid: yup.string().required("Medicine is required"),
        amount: yup.number().required("Amount is required"),
    }).validate(pharmacymedicine)
        .then((valid) => valid)
        .catch((err) => { throw new ValidationError(err.message) });
    return pharmacymedicine as PharmacyMedicineCreate;
}

export const pharamacyMedicineUpdateValidation = (pharmacymedicine: any) => { 
    yup.object().shape({
        id: yup.string().required("Id is required"),
        price: yup.number().min(1).required("Price is required"),
        quantity: yup.number().min(1).required("Quantity is required"),
    }).validate(pharmacymedicine)
        .then((valid) => valid)
        .catch((err) => { throw new ValidationError(err.message) });
    return pharmacymedicine as PharmacyMedicineCreate;
}