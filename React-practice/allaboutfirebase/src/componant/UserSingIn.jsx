import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../firebase'


const auth = getAuth(app)

function UserSingIn() {

    const [email ,setEmail] =useState("")
    const [password ,setPassword] =useState("")

    const singInUser= () =>{
        signInWithEmailAndPassword(auth , email , password ) .then(() => alert("sing in Successfully!"))
    }

    return (
        <div className="container bg-dark text-white p-5">
            <h2>singin</h2>
            <div className="col">
                <label htmlFor="">Enter Your Email</label>
                <br />
                <input
                    type="email"
                    required
                    placeholder="Enter Your Email"
                // value={data.email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="col my-3">
                <label htmlFor="">Enter Your Password</label>
                <br />
                <input
                    type="password"
                    required
                    placeholder="Enter Your Password"
                // value={data.password}
                onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <div className="col">
                <button onClick={singInUser} className="btn btn-success">
                    Sing IN
                </button>
            </div>
        </div>
    )
}

export default UserSingIn