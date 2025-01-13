import React, { useState } from 'react'
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const auth = getAuth(app);
    let [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    let submitHandler = () => {

        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then(() => {
                // Signed in 
                alert("login Down")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error)
            });
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">email</label>
                <input type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />

                <label htmlFor="password">Password</label>
                <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />

                <button onClick={submitHandler}>Login</button>
            </form>
        </>
    )
}

export default Login