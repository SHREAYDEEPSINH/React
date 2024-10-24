import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'


const auth = getAuth(app)
function UserSingIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const singInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("sing in Successfully!")
                navigate("/")
            }).catch((err) => alert("Wrong Details"))
    }

   

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card bg-secondary text-white p-4 shadow-lg" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Welcome Back</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <Link to="/forgot-password" className="text-light">Forgot Password?</Link>
                    </div>
                    <button onClick={singInUser} className="btn btn-success w-100">
                        Sign In
                    </button>

                    <div className="text-center mt-3">
                        <span>Don't have an account? </span>
                        <Link to="/usersingup" className="text-light fw-bold">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default UserSingIn