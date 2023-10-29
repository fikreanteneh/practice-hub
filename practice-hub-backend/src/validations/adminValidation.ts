import ValidationError from "../errors/validationError";
import { Admin } from "models/Admin";
import * as yup from "yup";


export const adminValidation = (admin: any) => { 
    const schema = yup.object().shape({
        name: yup.string().required("Name is Required"),
    })
        .validate(admin)
        .then((valid) => valid)
        .catch((err) => { throw new ValidationError(err.message) });
    return admin as Admin;
}