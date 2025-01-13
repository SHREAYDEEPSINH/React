import React, { useState } from 'react'
import { app } from '../firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function Singup() {
    const auth = getAuth(app);

    let [singupData, setSingUpData] = useState({
        // name : "" ,
        email: "",
        password: ""
    })

    let submitHandler = () => {
        createUserWithEmailAndPassword(auth, singupData.email, singupData.password)
            .then(() => {
                // Signed up 
                alert("user singup successfully")
            })
            .catch((error) => {
                alert(error)
            });
    }

    console.log(singupData)

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                {/* <label htmlFor="name">name</label>
                <input type="text" value={singupData.name} onChange={(e) => setSingUpData({ ...singupData, name: e.target.value })} /> */}

                <label htmlFor="email">email</label>
                <input type="email" value={singupData.email} onChange={(e) => setSingUpData({ ...singupData, email: e.target.value })} />

                <label htmlFor="password">Password</label>
                <input type="password" value={singupData.password} onChange={(e) => setSingUpData({ ...singupData, password: e.target.value })} />

                <button onClick={submitHandler}>Singup</button>
            </form>
        </>
    )
}

export default Singup