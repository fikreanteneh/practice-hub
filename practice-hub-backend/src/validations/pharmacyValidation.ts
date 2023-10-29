import { PharmacyCreate } from "../models/Pharamcy";
import * as yup from "yup";
import ValidationError from "../errors/validationError";

export const pharmacyCreateValidation = (pharmacy: any) => {
  yup
    .object()
    .shape({
      name: yup.string().required("Name is required"),
      address: yup.object().shape({
        latitude: yup.number().min(3).max(15).required(""),
        longitude: yup.number().min(33).max(48).required(),
      }),
      phonenumbers: yup
        .array()
        .of(yup.string())
        .required("Atleast one Contact Number is required"),
      emails: yup
        .array()
        .of(yup.string())
        .required("Atleast one Email is required"),
    })
    .validate(pharmacy)
    .then((valid) => valid)
    .catch((err) => {
      throw new ValidationError(err.message);
    });
  return pharmacy as PharmacyCreate;
};

export const pharmacyUpdateValidation = (pharmacy: any) => {
  yup
    .object()
    .shape({
      name: yup.string().required("Name is required"),
      address: yup.object().shape({
        latitude: yup.number().min(3).max(15).required(""),
        longitude: yup.number().min(33).max(48).required(),
      }),
      phonenumbers: yup
        .array()
        .of(yup.string())
        .required("Atleast one Contact Number is required"),
      emails: yup
        .array()
        .of(yup.string())
        .required("Atleast one Email is required"),
    })
    .validate(pharmacy)
    .then((valid) => valid)
    .catch((err) => {
      throw new ValidationError(err.message);
    });
  return pharmacy as PharmacyCreate;
};
