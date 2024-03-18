import { useState } from "react"
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'


export const Auth = () => {
    const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" })


    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, loginCredentials.email, loginCredentials.password)
        }
        catch (err) {
            console.error(err)
        }
    }
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        }
        catch (err) {
            console.error(err)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginCredentials(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    const inputStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '70%',
        marginBottom: '10px'
    };

    const buttonStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '20%',
    }


    return (
        <div className="flex flex-col items-center justify-center gap-y-8 h-[100%] w-[65%]">
            <h1 className="mt-6 ml-36 self-start text-lg">Your account details</h1>
            <input type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={loginCredentials.email}
                style={inputStyle}

            />
            <input type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={loginCredentials.password}
                style={inputStyle}
            />
            <button onClick={signIn} style={buttonStyle}>Sign In</button>
            <button onClick={signInWithGoogle} style={buttonStyle}> Sign In With Google</button>
            <p>Don't have an account?</p>
            <button onClick={signInWithGoogle}> Sign Up</button>
        </div >
    )
}