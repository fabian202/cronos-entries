import { useState } from "react";
import api from '../api'

export const useAuthentication = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLogged, setIslogged ] = useState(false);

    const postLogin = async () => {
        //user/authenticate
        try {
            const response = await api.request({ method: 'POST', url: 'user/authenticate', data: { email, password } });
            console.log(response)
            setIslogged(true)
        } catch (error) {
            console.log(error)
            setIslogged(false)
        }

    }

    return {
        email,
        password,
        isLogged,
        onEmailChange: (e) => {
            setEmail(e.currentTarget.value);
        },
        onPasswordChange: (e) => {
            setPassword(e.currentTarget.value);
        },
        onAuthenticate: (e) => {
            e.preventDefault();
            postLogin();
        }
    }
}