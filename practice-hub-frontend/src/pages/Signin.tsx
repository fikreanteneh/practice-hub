import { ChangeEvent, useState } from 'react'
import AuthBackground from '../assets/images/AuthBackground.png'
import { Link } from 'react-router-dom'
import * as S from '../styles';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Actions from './../redux/actions';
import * as T from '../types';
import { toast } from 'react-toastify';

export const Signin = () => {
    const dispatch = useDispatch()

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(4, 'Password must be at least 8 characters').required('Password is required'),
    });


    const [formData, setFormData] = useState<T.SignIn>({ email: "", password: "" })

    let showPassword = false;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((oldData) => ({ ...oldData, [id]: value }))
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        schema.validate(formData)
            .then(() => {
                dispatch({ type: Actions.SIGNIN, payload: formData })
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <section>
            <S.H1>Sign In</S.H1>
            <S.CenterFlex>
                <S.HalfImageContainer>
                    <img src={AuthBackground} className='w-full rounded-2xl'></img>
                </S.HalfImageContainer>
                <div className='md:w-[67%] lg:w-[50%] '>
                    <form className='lg:ml-10'>
                        <S.InputField
                            type='email'
                            placeholder='E - mail'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}>
                        </S.InputField>

                        <S.InputField
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            id='password'
                            value={formData.password}
                            onChange={handleChange}>
                        </S.InputField>

                        <S.BetweenFlex>
                            <p>Dont have an account? <Link to='/signup' className='text-blue-500 hover:text-blue-800'>Register</Link></p>
                            <p><Link to="/resetpassword" className='text-blue-500 hover:text-blue-800'> Forgot Password?</Link></p>
                        </S.BetweenFlex>
                        <S.PButton level={1} type='submit' onClick={(e) => handleSubmit(e)}>Sign In</S.PButton>
                    </form>
                </div>
            </S.CenterFlex>
        </section>
    )
}

export default Signin;