
export type SignUp = {
    email: string,
    fullName: string,
    password: string,
    confirmPassword: string
}

export type SignIn = {
    email: string,
    password: string
}

export type ResetPassword = {
    email: string
}