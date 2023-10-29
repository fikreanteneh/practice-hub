import ValidationError from '../errors/validationError'
import { MedicineCreate, MedicineUpdate } from '../models/Medicine'
import * as yup from 'yup'

export const medicineCreateValidation = (medicine: any): MedicineCreate => { 
    yup.object().shape({
        name: yup.string().required("Name is required"),
        exactname: yup.string().required("Fullname is required"),
        amount: yup.number().required("Amount in mg is required"),
    }).validate(medicine)
        .then((valid) => valid)
        .catch((err) => { throw new ValidationError(err.message) })
    return medicine as MedicineCreate
}

export const medicineUpdateValidation = (medicine: any): MedicineUpdate => { 
    yup.object().shape({
        id: yup.string().required("Medicine is required"),
        name: yup.string().required("Name is required"),
        exactname: yup.string().required("Fullname is required"),
        amount: yup.number().required("Amount in mg is required"),
    }).validate(medicine)
        .then((valid) => valid)
        .catch((err) => { throw new ValidationError(err.message) })
    return medicine as MedicineUpdate
} 