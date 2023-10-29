import * as T from '../../types/formTypes'
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

export async function signinWithEmail(payload: T.SignIn) {
    const user  = await signInWithEmailAndPassword(auth, payload.email, payload.password);
    return user;
}


export async function signUpWithEmail(payload: T.SignUp) {
    const response: Response = await fetch(`${import.meta.env.VITE_APP_BASE}/auth/signup`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.status != 201){
        const error = await response.json();
        throw new Error(error.error)
    }
    return await response.json()
}

export async function resetPassword(payload: T.ResetPassword) {
    await sendPasswordResetEmail(auth, payload.email);
}

export async function signout() {
    await auth.signOut();
}