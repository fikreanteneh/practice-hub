import ValidationError from "../errors/validationError";
import { AuthRequest } from "../models/Auth";
import * as yup from "yup";

export const authRequestValidation = (authRequest: AuthRequest) => {
    signin: yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(8).required("Password With 8 Characters is required"),
    }).validate(authRequest)
        .then((valid) => valid)
        .catch((err) => {throw new ValidationError(err.message)});
    return authRequest as AuthRequest;
};
