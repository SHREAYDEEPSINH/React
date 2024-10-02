import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../firebase'
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const auth = getAuth(app)
const provider = new GoogleAuthProvider();
function UserSingIn() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    const singInUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => alert("sing in Successfully!"))
    }



    async function googleSingin() {
       await  signInWithPopup(auth, provider)
        navigate("/home")
    }

    return (
        <div className="container bg-dark text-white p-5 w-50 mt-5 rounded-5">
            <h2>Singin</h2>
            <div className="col">
                <label htmlFor="">Enter Your Email</label>
                <br />
                <input
                    className='form-control'
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="col my-3">
                <label htmlFor="">Enter Your Password</label>
                <br />
                <input
                    className='form-control'
                    type="password"
                    required
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <div className="col">
                <button onClick={singInUser} className="btn btn-success me-3">
                    Singin
                </button>
                <button onClick={googleSingin} className="btn btn-outline-success">
                    Singin With Google
                </button>
            </div>
        </div>
    )
}

export default UserSingIn