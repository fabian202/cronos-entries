import { useState } from "react";
import api from '../api'

export const  useSignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signedUp, setSignedUp] = useState(false)

    const postSignUp = async () => {
        //user/authenticate
        try {
            const response = await api.request({ method: 'POST', url: 'user', data: { name, email, password } });
            console.log(response)
            setSignedUp(true);
            // setIslogged(true)
        } catch (error) {
            console.log(error)
            setSignedUp(false);
            // setIslogged(false)
        }

    }

    return {
        name,
        email,
        password,
        signedUp,
        onNameChange: (e) => {
            setName(e.currentTarget.value);
        },
        onEmailChange: (e) => {
            setEmail(e.currentTarget.value);
        },
        onPasswordChange: (e) => {
            setPassword(e.currentTarget.value);
        },
        onSignUp: (e) => {
            e.preventDefault();
            postSignUp();
        }
    }
}
