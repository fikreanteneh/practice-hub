
import * as yup from 'yup';
import * as T from '../../types/index'




export function emailChecker(email){
    if (email.length < 6) {
        return "email length must Be 6 or More"
    }
} 

export function passwordChecker(email){
    if (email.length < 6) {
        return "Password length must Be 6 or More"
    }
}

export function fullNameChecker(name){
    if (name.length < 6) {
        return "Full Name length must Be 6 or More"
    }
}

export const signUpChecker = (model: T.SignUp) => {
    const schema = yup.object().shape({
        fullName: yup.string().required('Full Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        age: yup.number().positive('Age must be a positive number').required('Age is required'),
      });    
}

export const signInChecker = (model: T.SignUp) => {
    const {email, password} = model
    
}